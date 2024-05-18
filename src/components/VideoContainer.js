import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const datajson = await data.json();
    console.log(datajson);
    setVideos(datajson?.items);
  }

  return (
    <div className="flex flex-wrap">
      {videos.map(video => <VideoCard info={video} key={video.id} />
      )}
    </div>
  )
}

export default VideoContainer
