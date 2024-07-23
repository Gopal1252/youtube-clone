import { MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineVideoCall } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants"
import { CiSearch } from "react-icons/ci";
import { cacheResults } from "../utils/searchSlice";


const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState(["loading suggestions..."]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();


  const searchCache = useSelector((store) => store.search);


  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSearchSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions();
      }
    },200);
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])


  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(
      cacheResults({
      [searchQuery] : json[1]
    }));
  }


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-cols-6 mx-4 mt-1 text-xl py-2">
      <div className="col-start-1 col-span-1 flex items-center">
        <div onClick={() => toggleMenuHandler()} className="hover:bg-[#e5e5e5] p-1 rounded-full"><MdMenu className="text-2xl cursor-pointer"/></div>
        <div className="max-w-24 align-center ml-6">
          <Link to="/">
            <img src="/images/yt-logo.png" alt="light-logo" className="cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="col-start-2 col-span-4 flex justify-center items-center">
        <div className="text-base w-[70%] h-[120%] rounded-full border border-[#cccccc] flex justify-center items-center">
          <input 
            type="text" 
            className="rounded-l-full pl-4 w-[90%] h-[100%] border-transparent outline-blue-500" 
            placeholder="Search" 
            value={searchQuery} 
            onChange={(e) => {
              return setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)} 
            ></input>
          <button className="bg-[#f0ecec] border-l-[#cccccc] w-[10%] h-[100%] rounded-r-full flex justify-center items-center"><IoIosSearch className="text-3xl" /></button>
        </div>
        {showSuggestions && (<div className="bg-white absolute text-base font-medium w-[45%] z-[999] top-[50px] rounded-xl shadow-lg">
          <ul className="">
            {searchSuggestions.map(s => <li key={s} className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer"><CiSearch className="mt-1 mr-2" />{s}</li>)}
          </ul>
        </div>)}
      </div>
      
      <div className="col-start-6 col-span-1 flex justify-end items-center">
        <div className="hover:bg-[#e5e5e5] p-1 rounded-full mr-6"><MdOutlineVideoCall className=" text-2xl cursor-pointer" /></div>
        <div className="hover:bg-[#e5e5e5] p-1 rounded-full mr-6"><CiBellOn className="text-2xl cursor-pointer" /></div>
        <FaCircleUser className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
