import React from "react";

import memoryIcon from "../../images/Dashboard/memory.png";
import rectangleIcon from "../../images/Dashboard/match.png";
import trophyIcon from "../../images/Dashboard/trophy.png";
// import account from "../../images/Dashboard/account.png";
import dropdownIcon from "../../images/Dashboard/dropdownIcon.png"; // Add dropdown arrow icon if available

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-orange-500">
            HAVE FUN AND EXPLORE
          </h1>
          <img src={trophyIcon} alt="Trophy" className="w-16 h-16" />
          <div className="flex items-center">
            {/* <img src={userIcon} alt="User Avatar" className="w-8 h-8 rounded-full mr-2" /> */}
            <span className="text-gray-800 font-semibold">Mizar Reim</span>
            <img
              src={dropdownIcon}
              alt="Dropdown Icon"
              className="w-4 h-4 ml-2"
            />{" "}
            {/* Dropdown arrow */}
          </div>
        </div>

        {/* Games Section */}
        <div className="">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full font-semibold mt-[1rem] ml-[1rem]">
            All Games
          </button>
          <div className="flex justify-end mb-8">
          <select className="border border-[#EB9721] text-gray-800 font-semibold py-2 px-4 rounded-md mr-[2rem]">
            <option>Games Categories</option>
          </select>
        </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
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
              className=" rounded-lg p-4 shadow"
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
              className=" rounded-lg p-4 shadow"
              style={{ backgroundColor: "rgba(240, 188, 120, 0.6)" }}
            ></div>
            <div
              className=" rounded-lg p-4 shadow"
              style={{ backgroundColor: "rgba(240, 188, 120, 0.6)" }}
            ></div>
          </div>
        </div>

        {/* Games Category Dropdown */}
        
      </div>
    </div>
  );
};

export default Dashboard;
