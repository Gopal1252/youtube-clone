import { MdHomeFilled } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import shortsLogo from "../assets/shorts.png";
import subs from "../assets/subs.png"

import { MdKeyboardArrowRight } from "react-icons/md";

import { PiUserRectangleThin } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import playlists from "../assets/playlists.webp"
import { GoVideo } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { PiThumbsUpLight } from "react-icons/pi";


const Sidebar = () => {
  return (
    <div className="py-3">
      <ul className="">
        <li className="flex mx-2 my-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
            <MdHomeFilled className="text-2xl"/>
            <div className="mx-8">Home</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
            <img src={shortsLogo} alt="shorts" className="max-w-6 max-h-6 font-bold"></img>
            <div className="mx-8">Shorts</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
            {/* <MdOutlineSubscriptions className="text-2xl" /> */}
            <img src={subs} alt="subs" className="max-w-6 max-h-6 font-bold"></img>
            <div className="mx-8">Subscriptons</div>
        </li>
      </ul>
      <hr className="mx-2 mt-3"/>
      <div className="flex text-md font-semibold mx-2 my-3 px-5 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        You
        <MdKeyboardArrowRight className="text-2xl ml-2"/>
      </div>
      <ul>
        <li className="flex mx-2 my-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
          <PiUserRectangleThin className="text-2xl"/>
          <div className="mx-8">Your channel</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
          <GoHistory className="text-2xl"/>
          <div className="mx-8">History</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
          <img src={playlists} alt="playlists" className="max-w-6 max-h-6 font-bold"></img>
          <div className="mx-8">Playlists</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
          <GoVideo className="text-2xl"/>
          <div className="mx-8">Your videos</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
          <GoClock className="text-2xl"/>
          <div className="mx-8">Watch later</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
          <PiThumbsUpLight className="text-2xl"/>
          <div className="mx-8">Liked Videos</div>
        </li>
      </ul>
      <hr className="mx-2 mt-3"/>
      <div className="flex text-md font-semibold my-3 px-5 py-1">
        Subscriptions
      </div>
      <ul>

      </ul>
    </div>
  )
}

export default Sidebar
