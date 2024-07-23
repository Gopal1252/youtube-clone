import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer.js';
import WatchPageInfo from './WatchPageInfo.js';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((store) => store.app.isOpen);

    useEffect(()=> {
        dispatch(closeMenu());
    },[]);

  return (
    <div className="grid grid-cols-3 gap-4 w-full h-screen px-4 py-4">
        <div className="col-start-1 col-span-2">
            <iframe
              className="w-full h-[60vh] rounded-xl"
              src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1"}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className='my-3'>
                <WatchPageInfo videoId={videoId}/>
            </div>
            <div className="my-5">
                <CommentsContainer/>
            </div>
        </div>
        <div className="col-start-3 col-span-1">
        </div>
    </div>
  );
}

export default WatchPage
