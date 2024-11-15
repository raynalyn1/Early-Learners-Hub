import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Dashboard/lg.png";
import homeIcon from "../images/Dashboard/home.png";
import listIcon from "../images/Dashboard/list.png";
import userIcon from "../images/Dashboard/user.png";
import video from "../images/Dashboard/video.png";
import LogoutModal from "./LogoutModal";

const Sidebar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsModalVisible(true);
  };

  const confirmLogout = () => {
    localStorage.clear(); // Clear local storage
    navigate("/"); // Redirect to landingPage
  };





  return (
    <div className="bg-[#EB9721] w-69 h-screen p-7 flex flex-col items-center">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-24 h-auto mb-10" />

      <nav className="w-full">
        <ul className="space-y-6 text-black text-lg">
          <li className="flex items-center space-x-4">
            <img src={homeIcon} alt="Dashboard" className="w-6 h-6" />
            <Link 
              to="/admin/dashboard" 
              className="block px-4 py-2 rounded hover:bg-[#F0BC78]"
            >
              Dashboard
            </Link>
          </li>
          
          <li className="flex items-center space-x-4">
            <img src={listIcon} alt="Users" className="w-6 h-6" />
            <Link 
              to="/admin/user" 
              className="block px-4 py-2 rounded hover:bg-[#F0BC78]"
            >
              User’s  List
            </Link>
          </li>
          
          <li className="flex items-center space-x-4">
            <img src={userIcon} alt="Score Tracking" className="w-6 h-6" />
            <Link 
              to="/admin/tracking" 
              className="block px-4 py-2 rounded hover:bg-[#F0BC78]"
            >
              Score Tracking
            </Link>
          </li>
          
          <li className="flex items-center space-x-4">
            <img src={video} alt="Videos" className="w-6 h-6" />
            <Link 
              to="/admin/upload" 
              className="block px-4 py-4 rounded hover:bg-[#F0BC78]"
            >
              Upload Videos
            </Link>
          </li>
          <li>
            <h1 onClick={handleLogout} className="block px-4 py-4 rounded hover:bg-[#F0BC78]">Logout</h1>
          </li>
        </ul>
      </nav>

      <LogoutModal
        isVisible={isModalVisible}
        onConfirm={confirmLogout}
        onCancel={() => setIsModalVisible(false)}
      />
    </div>
  );
};

export default Sidebar;
