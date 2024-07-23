import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const Comment = ({data}) => {
    const {name,text} = data;

    const colors = [
        "black", "silver", "gray", "maroon", "red", "purple", "fuchsia", 
        "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"
    ];

  return (
    <div className='flex my-4'>
      <FaUserCircle size={30} color={colors[Math.floor(Math.random()*15)]} className='cursor-pointer'/>
      <div className='flex flex-col mx-2'>
        <div className='font-semibold cursor-pointer'>@{name}</div>
        <div className='text-sm'>{text}</div>
        <div className='flex my-1 cursor-pointer'>
            <BiLike size={20} className='cursor-pointer'/>
            <BiDislike size={20} className='cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Comment
