import { useEffect, useState } from "react";
import customFetch from "../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import moment from "moment";

export const loader = async () => {
  try {
    const result = await customFetch("v1/user/current-user", {
      withCredentials: true,
    });
    const { data } = result.data;
    const { user } = data;
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const LiveChat = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const data = useLoaderData();

  // Fetch all room messages
  useEffect(() => {
    const fetchRoomMessages = async () => {
      try {
        const result = await customFetch.get(`v1/message/fetch-all-message`, {
          withCredentials: true,
        });
        setRoomMessages(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRoomMessages();
    const interval = setInterval(fetchRoomMessages, 800);

    return () => clearInterval(interval);
  }, []);

  // Fetch messages for the selected room
  useEffect(() => {
    if (!selectedRoom) return;

    const fetchMessages = async () => {
      try {
        const result = await customFetch.get(
          `v1/message/fetch-message/${selectedRoom}`,
          {
            withCredentials: true,
          }
        );
        setMessages(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 1000);

    return () => clearInterval(interval);
  }, [selectedRoom]);

  let roomsSet = new Set();
  if (roomMessages.length > 0) {
    roomMessages.forEach((val) => {
      if (val.room_id) {
        roomsSet.add(val.room_id);
      }
    });
  }

  // Convert Set to array
  const chatRooms = Array.from(roomsSet).map((room_id) => ({
    id: room_id,
    username: roomMessages.find((msg) => msg.room_id === room_id)?.username,
  }));

  const sendMessage = async () => {
    try {
      if (currentMessage === "") {
        return null;
      }
      const messageData = {
        user_id: data.id,
        message: currentMessage,
        username: data.username,
        room_id: selectedRoom,
      };
      await customFetch.post(
        `v1/message/send-message/${messageData.room_id}`,
        messageData,
        {
          withCredentials: true,
        }
      );
      setCurrentMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
      {/* Sidebar */}
      <div className="w-1/3 bg-white border-r-2 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Chatrooms</h2>
        <ul className="max-h-64 overflow-y-auto">
          {chatRooms.map((room, index) => (
            <li
              key={index}
              className={`p-2 mb-2 cursor-pointer ${
                selectedRoom === room.id ? "bg-blue-500 text-white" : "bg-white"
              } rounded-lg shadow-lg`}
              onClick={() => setSelectedRoom(room.id)}
            >
              {room.username}
            </li>
          ))}
        </ul>
      </div>

      {/* Chatroom */}
      <div className="w-2/3 bg-white p-4 flex flex-col">
        {selectedRoom ? (
          <>
            <div className="flex-1 bg-gray-100 p-4 max-h-96 min-h-96 rounded-lg overflow-y-auto mb-4">
              {messages.length > 0 ? (
                messages.map((chat, index) => (
                  <div
                    key={index}
                    className={`mb-2 w-fit max-w-fit py-1 px-4 rounded-lg text-white ${
                      chat.user_id === data.id
                        ? "ml-auto bg-green-500 text-right"
                        : "mr-auto bg-blue-500 text-left"
                    }`}
                    style={{
                      wordBreak: "break-word",
                      maxWidth: "75%",
                    }}
                  >
                    <span className="block font-semibold italic text-left text-sm">
                      ~{chat.user_id === data.id ? "You" : chat.username}
                    </span>
                    <span className="text-sm track-wider">{chat.message}</span>
                    <span
                      className={`block text-[10px] text-gray-200 mt-1 ${
                        chat.user_id === data.id ? "text-left" : "text-right"
                      }`}
                    >
                      {moment(chat.timestamp).format("hh:mm A")}
                    </span>
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
                value={currentMessage}
                onChange={(event) => {
                  setCurrentMessage(event.target.value);
                }}
                onKeyUp={handleEnter}
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
