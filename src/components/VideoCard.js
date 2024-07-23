// import { useSelector } from "react-redux";
// import { YT_CHANNEL_START, YT_CHANNEL_END } from "../utils/constants";
// import { useEffect, useState } from "react";

const VideoCard = ({info}) => {

  // const [channelImage,setChannelImage] = useState("");

  // const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  // console.log(info);
  const {channelTitle, channelId, title, thumbnails} = info?.snippet;
  const {viewCount} = info?.statistics;

  // useEffect(()=>{
  //   const getChannelData = async () => {
  //     const data = await fetch(YT_CHANNEL_START + channelId + YT_CHANNEL_END);
  //     const datajson = await data.json();
  //     setChannelImage(datajson);
  //   }
  //   getChannelData();
  // }, [channelId, channelImage]);

  


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
    <div className= "m-2 group cursor-pointer rounded-xl">
        <img src={thumbnails?.medium.url} alt="thumbnail" className="rounded-xl group-hover:rounded-none w-full" />
          <div className="font-medium my-2 text-wrap">{title}</div>
          <div className="text-sm text-gray-600">
            <h2>{channelTitle}</h2>
            <h3>{nFormatter(viewCount,1)}</h3>
          </div>  
    </div>
  )
}

export default VideoCard;
