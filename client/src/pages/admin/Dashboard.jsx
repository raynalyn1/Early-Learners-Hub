import React from "react";

import memoryIcon from "../../images/Dashboard/memory.png";
import rectangleIcon from "../../images/Dashboard/match.png";
import trophyIcon from "../../images/Dashboard/trophy.png";
import dropdownIcon from "../../images/Dashboard/dropdownIcon.png"; // Add dropdown arrow icon if available
import dashImage from "../../images/Dashboard/dImage.png";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <img src={dashImage} alt=""  className="absolute   object-cover top-0  w-[50%] h-[45vh]"/>
        
          
          {/* User Info and Dropdown */}
          <div className="flex items-center">
            <span className="text-white font-semibold mr-2">Mizar Reim</span>
            <img src={dropdownIcon} alt="Dropdown Icon" className="w-4 h-4" />
          </div>
      

        {/* Games Section */}
        <div className="p-6">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full font-semibold mt-[20rem]">
            All Games
          </button>
          
          <div className="flex justify-end mb-8 mt-4">
            <select className="border border-[#EB9721] text-gray-800 font-semibold py-2 px-4 rounded-md outline-none">
              <option>Games Categories</option>
              <option value="Literacy">Literacy</option>
              <option value="Phonics">Phonics</option>
              <option value="Math">Math</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Game Cards */}
            <div
              className="rounded-lg p-4 shadow"
              style={{ backgroundColor: "rgba(240, 188, 120, 0.6)" }}
            >
              <img
                src={memoryIcon}
                alt="Memory Match Game"
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold text-gray-800">
                Memory Match
              </h3>
              <p className="text-gray-600 text-sm">Letters from A-Z</p>
              <button className="mt-2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                Start Game
              </button>
            </div>
            <div
              className="rounded-lg p-4 shadow"
              style={{ backgroundColor: "rgba(240, 188, 120, 0.6)" }}
            >
              <img
                src={rectangleIcon}
                alt="Picture Word Matching Game"
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold text-gray-800">
                Picture-Word Matching
              </h3>
              <p className="text-gray-600 text-sm">Dog, Bird</p>
              <button className="mt-2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                Start Game
              </button>
            </div>
            {/* Additional placeholders for empty game cards */}
            <div
              className="rounded-lg p-4 shadow"
              style={{ backgroundColor: "rgba(240, 188, 120, 0.6)" }}
            ></div>
            <div
              className="rounded-lg p-4 shadow"
              style={{ backgroundColor: "rgba(240, 188, 120, 0.6)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
