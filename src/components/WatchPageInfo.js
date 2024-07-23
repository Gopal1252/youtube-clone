import React from 'react'
import { VIDEO_API } from '../utils/constants';
import { useState, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";

const WatchPageInfo = ({videoId}) => {
    const [videoInfo, setVideoInfo] = useState({});
    useEffect(() => {
        fetchData();
    }, []);

    const {title, channelTitle, publishedAt} = videoInfo?.snippet || {};
    const {likeCount, viewCount} = videoInfo?.statistics || {};

    const fetchData = async() => {
        const data = await fetch(VIDEO_API + "&id=" + videoId);
        const json = await data.json();
        setVideoInfo(json?.items[0]);
        console.log(videoInfo);
    }


    const nFormatter=(num, digits) => {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
      } 

  return (
    <div className='flex flex-col'>
      <div className='text-xl font-bold'>
        {title}
      </div>
      <div className='flex my-3 flex-col lg:flex-row lg:justify-between'>
        <div className='flex'>
            <FaUserCircle size={40}/>
            <div className='flex flex-col ml-2'>
                <div className='font-semibold'>{channelTitle}</div>
                <div className='text-gray-500 text-xs'>6.90M</div>
            </div>
            <button className='text-white bg-black rounded-full px-3 text-sm font-semibold ml-6'>Subscribe</button>
        </div>
        <div className='flex gap-4 pt-5 lg:pt-0'>
            <div className='flex'>
                <div className='bg-[#f1f3f2] flex items-center px-3 py-1 rounded-l-full hover:bg-[#e5e5e4] cursor-pointer border-r'>
                    <BiLike size={25} className=''/>
                    <div className='ml-1 text-sm'>{nFormatter(likeCount,1)}</div>
                </div>
                <div className='bg-[#f1f3f2] flex items-center px-3 rounded-r-full hover:bg-[#e5e5e4] cursor-pointer'>
                    <BiDislike size={25} className=''/>
                </div>    
            </div>
            <div className='bg-[#f1f3f2] flex items-center px-3 rounded-full hover:bg-[#e5e5e4] cursor-pointer text-sm'>
                <PiShareFatLight size={25}className='font-bold mr-2'/>
                <div className='font-semibold'>Share</div>
            </div>
            <div className='bg-[#f1f3f2] flex items-center px-3 rounded-full hover:bg-[#e5e5e4] cursor-pointer text-sm'>
                <TfiDownload size={15}className='font-bold mr-2'/>
                <div className='font-semibold'>Download</div>
            </div>
        </div>
      </div>
      <div className='my-5 bg-[#f1f3f2] rounded-lg'>
        <div className='text-sm font-semibold m-3 flex'>
            <div className='mr-2'>{nFormatter(viewCount,1)} views</div>
            {/* {publishedAt} */}
        </div>
        <div className='mx-3 my-3 text-sm'>
            Video Description ...
        </div>
      </div>
    </div>
  )
}

export default WatchPageInfo
