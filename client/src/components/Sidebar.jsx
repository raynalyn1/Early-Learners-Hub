import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Dashboard/lg.png";
import homeIcon from "../images/Dashboard/home.png";
import listIcon from "../images/Dashboard/list.png";
import userIcon from "../images/Dashboard/scoretracking.png";
import video from "../images/Dashboard/video.png";

const Sidebar = () => {
  return (
    <div className="bg-[#EB9721] w-69 h-screen p-7 flex flex-col items-center overflow-auto">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-24 h-auto mb-12" />

      <nav className="w-[100%] ">
        <ul className="space-y-6 text-black text-lg ">
          <li className="group flex items-center space-x-4  hover:border-[#FFC77E] hover:shadow-2xl hover:rounded-lg transition-all duration-500 p-3 ">
            <img src={homeIcon} alt="Dashboard" className="w-8 h-8 transform group-hover:scale-110 transition-all duration-200" />
            <Link 
              to="/admin/dashboard" 
              className="block text-black group-hover:scale-105 transform transition-all duration-200"
            >
              Dashboard
            </Link>
          </li>

          <li className="group flex items-center space-x-4 hover:border-[#FFC77E] hover:shadow-2xl hover:rounded-lg transition-all duration-200 p-3 ">
            <img src={listIcon} alt="Users" className="w-8 h-8 transform group-hover:scale-110 transition-all duration-200" />
            <Link 
              to="/admin/user" 
              className="block text-black group-hover:scale-105 transform transition-all duration-200"
            >
              User’s List
            </Link>
          </li>

          <li className="group flex items-center space-x-4 hover:border-[#FFC77E] hover:shadow-2xl hover:rounded-lg transition-all duration-200 p-3 ">
            <img src={userIcon} alt="Score Tracking" className="w-8 h-8 transform group-hover:scale-110 transition-all duration-200" />
            <Link 
              to="/admin/tracking" 
              className="block text-black group-hover:scale-105 transform transition-all duration-200"
            >
              Score Tracking
            </Link>
          </li>

          <li className="group flex items-center space-x-4 hover:border-[#FFC77E] hover:shadow-2xl hover:rounded-lg transition-all duration-200 p-3 " >
            <img src={video} alt="Videos" className="w-8 h-8 transform group-hover:scale-110 transition-all duration-200" />
            <Link 
              to="/admin/videos" 
              className="block text-black group-hover:scale-105 transform transition-all duration-200"
            >
              Upload Videos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
