import { RiSendPlane2Fill } from "react-icons/ri";

import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
const Chat = ({socket,id_user}) => {
  const [btnChat, setBtnChat] = useState(true);
  const handleButtonChat = () => {
    setBtnChat(!btnChat);
  };
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
        className={`flex-1 transition-all bg-gray-100  p-2 overflow-y-auto h-screen ${
          btnChat ? "h-max-full" : "hidden"
        } `}
      >HMM</div>
      <div
        className={`flex border-t transition-all  border-gray-50 ${
          btnChat ? " h-fit" : "hidden"
        }  `}
      >
        <input
          type="text"
          placeholder="Tulis Pesan"
          className="flex-1 p-2 border-none focus:outline-none"
        />
        <button type="submit">
          <RiSendPlane2Fill className="mr-2 text-xl text-blue-600" />
        </button>
      </div>
    </div>
  );
};
export default Chat;
