import { useSelector } from "react-redux";

const VideoCard = ({info}) => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  // console.log(info);
  const {channelTitle, title, thumbnails} = info?.snippet;
  const {viewCount} = info?.statistics;


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
