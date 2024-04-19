import { MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineVideoCall } from "react-icons/md";


const Heading = () => {
  return (
    <div className="grid grid-cols-6 mx-7 mt-1 text-xl py-2">
      <div className="col-start-1 col-span-1 flex items-center">
        <div className="hover:bg-[#e5e5e5] p-1 rounded-full"><MdMenu className="text-2xl cursor-pointer"/></div>
        <div className="max-w-24 align-center ml-6">
          <img src="/images/yt-logo.png" alt="light-logo" className="cursor-pointer" />
          {/* <img src="/images/yt-logo-dark.png" alt="dark-logo" className="hidden dark:inline" /> */}
        </div>
      </div>
      <div className="col-start-2 col-span-4 flex justify-center items-center">
        <div className="text-lg w-[70%] h-[120%] rounded-full border border-[#cccccc] flex justify-between items-center">
            <input type="text" className="rounded-l-full pl-4 w-[90%] h-[100%] border-transparent outline-blue-500" placeholder="Search"></input>
            <button className="bg-[#f0ecec] border-l-[#cccccc] w-[10%] h-[100%] rounded-r-full flex justify-center items-center"><IoIosSearch className="text-3xl" /></button>
        </div>
      </div>
      <div className="col-start-6 col-span-1 flex justify-end items-center">
      <div className="hover:bg-[#e5e5e5] p-1 rounded-full mr-6"><MdOutlineVideoCall className=" text-2xl cursor-pointer" /></div>
        <div className="hover:bg-[#e5e5e5] p-1 rounded-full mr-6"><CiBellOn className="text-2xl cursor-pointer" /></div>
        <FaCircleUser className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Heading;
