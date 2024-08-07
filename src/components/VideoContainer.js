import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const VideoContainer = () => { 
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API); 
    const datajson = await data.json();
    // console.log(datajson);
    setVideos(datajson?.items);
  }

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  return (
    <div className={"p-4 " + (isMenuOpen ? "grid grid-cols-3" : " grid grid-cols-4")}>
      {videos.map(video => <Link to={"/watch?v="+video.id}><VideoCard info={video} key={video.id} /></Link>
      )}
    </div>
  )
}

export default VideoContainer
