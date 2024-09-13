import { useState, useEffect } from "react";
import io from "socket.io-client";
import customFetch from "../../utils/customFetch";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const result = await customFetch.get("v1/message/fetch-all-message", {
      withCredentials: true,
    });
    return result.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const LiveChat = () => {
  const [socket, setSocket] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  const messages = useLoaderData();

  // Connect to the socket server
  useEffect(() => {
    const newSocket = io.connect("http://localhost:3001", {
      withCredentials: true,
    });
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
        console.log("Socket disconnected");
      }
    };
  }, []);
  // Join and Leave room logic
  useEffect(() => {
    if (socket && selectedRoom) {
      
      // Join the selected room
      socket.emit("admin_join_room",selectedRoom);

      // Fetch messages for selected room
      const filteredMessages = messages.filter(
        (msg) => msg.room_id === selectedRoom
      );
      setRoomMessages(filteredMessages);

      // Leave the room when component unmounts or when switching rooms
      return () => {
        socket.emit("leaveRoom", selectedRoom);
      };
    }
  }, [socket, selectedRoom, messages]);

  // Create unique rooms using Set
  let roomsSet = new Set();
  if (messages.length > 0) {
    messages.forEach((val) => {
      if (val.room_id) {
        roomsSet.add(val.room_id);
      }
    });
  }

  // Convert Set to array
  const chatRooms = Array.from(roomsSet).map((roomId) => ({
    id: roomId,
  }));

  return (
    <div className="flex mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
      {/* Sidebar */}
      <div className="w-1/3 bg-white border-r-2 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Chatrooms</h2>
        <ul className="max-h-64 overflow-y-auto">
          {chatRooms.map((room) => (
            <li
              key={room.id}
              className={`p-2 mb-2 cursor-pointer ${
                selectedRoom === room.id ? "bg-blue-500 text-white" : "bg-white"
              } rounded-lg shadow-lg`}
              onClick={() => setSelectedRoom(room.id)}
            >
              {room.id}
            </li>
          ))}
        </ul>
      </div>

      {/* Chatroom */}
      <div className="w-2/3 bg-white p-4 flex flex-col">
        {selectedRoom ? (
          <>
            <h2 className="text-xl font-bold mb-4">Chatroom {selectedRoom}</h2>
            <div className="flex-1 bg-gray-100 p-4 rounded-lg overflow-y-auto mb-4">
              {roomMessages.length > 0 ? (
                roomMessages.map((chat, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${
                      chat.sender === "You" ? "text-right" : "text-left"
                    }`}
                  >
                    <span className="font-semibold">{chat.user_id}: </span>
                    <span className="text-xs break-all">{chat.message}</span>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No messages in this room.</div>
              )}
            </div>
            <div>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Type a message..."
              />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a chatroom to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveChat;
