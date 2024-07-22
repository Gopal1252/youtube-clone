import { MdHomeFilled } from "react-icons/md";
import shortsLogo from "../assets/shorts.png";
import subs from "../assets/subs.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiUserRectangleThin } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import playlists from "../assets/playlists.webp"
import { GoVideo } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { PiThumbsUpLight } from "react-icons/pi";
import videolibrary from "../assets/videolibrary.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)


  return isMenuOpen ? (
    <div className="py-3 mr-8">
      <ul className="">
        <Link to="/">
          <li className="flex mx-2 mb-2 px-3 py-1 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
              <MdHomeFilled className="text-2xl"/>
              <div className="mx-8">Home</div>
          </li>
        </Link>
        <li className="flex mx-2 my-2 px-3 py-1 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
            <img src={shortsLogo} alt="shorts" className="max-w-6 max-h-6 font-bold"></img>
            <div className="mx-8">Shorts</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-1 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
            <img src={subs} alt="subs" className="max-w-6 max-h-6 font-bold"></img>
            <div className="mx-8">Subscriptons</div>
        </li>
      </ul>
      <hr className="m-2 mt-3"/>
      <div className="flex text-md font-semibold mx-2 my-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        You
        <MdKeyboardArrowRight className="text-2xl ml-2"/>
      </div>
      <ul>
        <li className="flex mx-2 my-2 px-3 py-1 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
          <PiUserRectangleThin className="text-2xl"/>
          <div className="mx-8">Your channel</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-1 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
          <GoHistory className="text-2xl"/>
          <div className="mx-8">History</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-1 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
          <img src={playlists} alt="playlists" className="max-w-6 max-h-6 font-bold"></img>
          <div className="mx-8">Playlists</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-1 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
          <GoVideo className="text-2xl"/>
          <div className="mx-8">Your videos</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-1 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
          <GoClock className="text-2xl"/>
          <div className="mx-8">Watch later</div>
        </li>
        <li className="flex mx-2 my-2 px-3 py-1 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">
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
  ) : (
    <div className="py-3 mr-8">
      <ul className="">
        <li className="small-sidebar flex flex-col justify-start ml-2 mb-3 px-3 py-1 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MdHomeFilled className="text-2xl mb-1"/>
            <div className="mx-[-0.15rem] font-semibold">Home</div>
        </li>
        <li className="small-sidebar flex flex-col justify-start ml-2 mt-2 mb-3 px-3 py-1 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img src={shortsLogo} alt="shorts" className="max-w-6 max-h-6 font-bold mb-1"></img>
            <div className="mx-[-0.15rem] font-semibold">Shorts</div>
        </li>
        <li className="small-sidebar flex flex-col justify-start ml-2 mt-2 mb-3 px-3 py-1 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img src={subs} alt="subs" className="max-w-6 max-h-6 font-bold mb-1"></img>
            <div className="mx-[-1rem] font-semibold">Subscriptons</div>
        </li>
        <li className="small-sidebar flex flex-col justify-start ml-2 mt-2 mb-3 px-3 py-1 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img src={videolibrary} alt="videolibrary" className="max-w-6 max-h-6 font-bold mb-1"></img>
            <div className="mx-1 font-semibold">You</div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
