/* eslint-disable react/prop-types */
import { RiSendPlane2Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import customFetch from "../utils/customFetch.js";
import moment from "moment"
const Chat = ({ socket, current_id, room_id }) => {
  const [btnChat, setBtnChat] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const handleButtonChat = () => {
    setBtnChat(!btnChat);
  };
  
  const sendMessage = async () => {
    if(!currentMessage){
      return null
    }
      const message = {
        message: currentMessage,
        room_id: room_id,
        user_id: current_id,
      };
      await socket.emit("send_message", message);
      setCurrentMessage("");
  };

    
 
    
        
        useEffect(() => {  
          socket.on("receive_message", async (data) => {
            setMessageList(data)            
          });
          
        },[socket])
        useEffect(()=>{
          const fetchMessage = async () => {
            if(!room_id){
              return null;
            }else{
              try {
                const result = await customFetch.get(
                  `v1/message/fetch-message/${room_id}`,
                  {
                    withCredentials: true,
                  }
                );
                setMessageList(result.data.data);
              } catch (error) {
                console.log(error);
              }
            }
            
          };
          fetchMessage();
        },[room_id])



  return (
    <div className="fixed mr-2 z-50 bottom-0 right-0 w-80 max-h-96 rounded-t-lg  bg-white flex flex-col shadow-lg">
      <div
        onClick={handleButtonChat}
        className=" flex justify-between items-center hover:cursor-pointer  bg-blue-600 text-white p-2 rounded-t-lg"
      >
        <h4 className="flex justify-center items-center">
          Live Chat Admin{" "}
          <span className="relative flex h-3 w-3 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </h4>
        <FaChevronDown
          className={`mr-2   transition-all text-sm ${
            btnChat ? " " : "rotate-180"
          }`}
        />
      </div>

      <div
        className={`transition-all bg-gray-100  p-2 overflow-y-auto h-screen ${
          btnChat ? "h-max-full" : "hidden"
        } `}
        >
        <ScrollToBottom>
        {messageList.map((content)=>{
          if(content.message){
          return (
            <div
              key={content.id}
              className="flex bg-green-500 w-fit rounded-lg my-1 py-1 px-2 max-w-fit break-words"
            >
              <p className="flex text-sm mx-3 break-all">{content.message}</p>
              <div className="inline-block align-bottom">
                <p className="text-[8px] inline-block align-bottom">
                  {moment(content.timestamp).format("hh:mm")}
                </p>
              </div>
            </div>
          );
          }
          
        })}
        </ScrollToBottom>
      </div>
      <div
        className={`flex border-t transition-all  border-gray-50 ${
          btnChat ? " h-fit" : "hidden"
        }  `}
      >
        <input
          type="text"
          value={currentMessage}
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          placeholder="Tulis Pesan"
          className="flex-1 p-2 border-none focus:outline-none"
        />
        <button type="button" onClick={sendMessage}>
          <RiSendPlane2Fill className="mr-2 text-xl text-blue-600" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
