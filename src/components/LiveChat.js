import React from 'react';
import ChatMessage from './ChatMessage';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateMessage, generateName } from '../utils/randomMessages';
import { FaUserCircle } from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";


const LiveChat = () => {
    const [messageText, setMessageText] = useState("");
    const liveMessages = useSelector(store => store.chat.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        const i = setInterval(() => {
            //API Polling
            console.log("API Polling")
            dispatch(addMessage({
                name : generateName(),
                message : generateMessage(),
            }))

        }, 1500)
        return () => clearInterval(i);
    }, [])

    const sendMessage = () => {
        dispatch(addMessage({
            name : "User",
            message : messageText
        }))
        setMessageText("");
    }

  return (
    <div className="w-full h-[60vh] border border-[#cccccc] rounded-lg flex flex-col">
      <div className="border-b border-[#cccccc] p-2">
        <div className="font-bold">LiveChat</div>
      </div>
      <div className="p-2 overflow-y-scroll h-[50vh] flex flex-col-reverse mt-2">
        {liveMessages.map((m, index) => (
          <ChatMessage key={index} name={m.name} message={m.message} />
        ))}
      </div>
      <form className="flex justify-between items-center border border-t" onSubmit={(e) => {
        e.preventDefault();
        sendMessage();
      }}>
        <span className="p-2 ml-4">
          <FaUserCircle color="blue" size={20} />
        </span>
        <input
          type="text"
          className="ml-2 p-2 w-full"
          placeholder="Chat..."
          value={messageText}
          onChange={(e) => {
             setMessageText(e.target.value);
          }}
        ></input>
        <button className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg mr-1">
          <LuSendHorizonal />
        </button>
      </form>
    </div>
  );
}

export default LiveChat
