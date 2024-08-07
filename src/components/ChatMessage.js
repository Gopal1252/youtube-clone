import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({name,message}) => {
    
  return (
    <div className='flex text-sm items-center my-2 ml-4'>
      <FaUserCircle/>
      <span className='ml-2 text-gray-600 font-bold'>{name}</span>
      <span className='ml-2'>{message}</span>
    </div>
  )
}

export default ChatMessage
