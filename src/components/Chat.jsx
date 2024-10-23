/* eslint-disable react/prop-types */
import { RiSendPlane2Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import customFetch from "../utils/customFetch.js";
import moment from "moment";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ currentId, username }) => {
  const [btnChat, setBtnChat] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleButtonChat = () => {
    setBtnChat(!btnChat);
  };

  useEffect(() => {
    if (!currentId) return;

    const fetchAllMessage = async () => {
      try {
        const result = await customFetch.get(
          `v1/message/fetch-message/${currentId}`,
          {
            withCredentials: true,
          }
        );
        setMessageList(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllMessage();
    const interval = setInterval(fetchAllMessage, 1000);

    return () => clearInterval(interval);
  }, [currentId]);

  const sendMessage = async () => {
    try {
      if (currentMessage === "") {
        return;
      }
      const messages = {
        user_id: currentId,
        message: currentMessage,
        username: username,
      };
      await customFetch.post(`v1/message/send-message/${currentId}`, messages, {
        withCredentials: true,
      });
      setCurrentMessage("");

      // Fetch messages after sending a new one to update immediately
      const result = await customFetch.get(
        `v1/message/fetch-message/${currentId}`,
        {
          withCredentials: true,
        }
      );
      setMessageList(result.data.data);
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
    <div className="fixed mr-2 z-50 bottom-0 right-0 w-80 max-h-96 rounded-t-lg bg-white flex flex-col shadow-lg">
      <div
        onClick={handleButtonChat}
        className="flex justify-between items-center hover:cursor-pointer bg-blue-600 text-white p-2 rounded-t-lg"
      >
        <h4 className="flex justify-center items-center">
          Live Chat Admin{" "}
          <span className="relative flex h-3 w-3 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </h4>
        <FaChevronDown
          className={`mr-2 transition-all text-sm ${
            btnChat ? " " : "rotate-180"
          }`}
        />
      </div>

      <div
        className={`transition-all bg-gray-100 p-2 overflow-y-auto h-screen ${
          btnChat ? "h-max-full" : "hidden"
        }`}
      >
        <ScrollToBottom className="h-full">
          {messageList.length > 0 ? (
            messageList.map((content) => {
              if (content.message) {
                return (
                  <div
                    key={content.id}
                    className={`flex ${
                      content.user_id == currentId
                        ? "justify-end"
                        : "justify-start"
                    } w-full my-1`}
                  >
                    <div
                      className={`w-fit rounded-lg py-1 px-4 max-w-44 break-words ${
                        content.user_id == currentId
                          ? "bg-green-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      <p className="italic text-xs text-left font-semibold ">
                        ~{content.user_id == currentId
                          ? "You"
                          : content.username}
                      </p>
                      <p className="text-sm break-all">{content.message}</p>
                      <div className="text-right mt-1">
                        <p className="text-[8px] tracking-wider text-right text-gray-200">
                          {moment(content.timestamp).format("hh:mm A")}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <p className="text-gray-500">No messages yet.</p>
          )}
        </ScrollToBottom>
      </div>

      <div
        className={`flex border-t transition-all border-gray-50 ${
          btnChat ? "h-fit" : "hidden"
        }`}
      >
        <input
          type="text"
          value={currentMessage}
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyUp={handleEnter}
          placeholder="Type a message..."
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
