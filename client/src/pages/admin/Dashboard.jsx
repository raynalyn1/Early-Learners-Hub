import React, { useEffect, useState } from "react";
import teach from "../../images/Dashboard/teach.png";
import glowingstar from "../../images/Dashboard/glowingstars.png";

function Dashboard() {
  const [username, setUserName] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Fetch username from local storage
    const name = localStorage.getItem('name');
    if (name) {
      setUserName(name);
    }

    // Format the current date
    const today = new Date();
    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDate);
  }, []);

  // Get initials from name
  const getInitials = (name) => {
    const nameParts = name.split(" ");
    const firstNameInitial = nameParts[0]?.charAt(0).toUpperCase();
    const lastNameInitial = nameParts[1]?.charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
  };

  return (
    <div className="">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-md mb-6 border border-[#E9AF5E] ">
        <div>
          <h2 className="text-gray-700 text-lg font-semibold">Dashboard</h2>
          <p className="text-sm text-gray-500">{currentDate}</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
            {username ? getInitials(username) : "??"}
          </div>
          <p className="text-gray-700">{username}</p>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-orange-100 p-6 rounded-md mb-6 relative overflow-hidden shadow-md flex items-center w-[100%] h-[31vh]">
        <div className="absolute bottom-[6rem] flex space-x-1">
          <img src={glowingstar} alt="Glowing Star 1" className="w-30 h-30 " />
        </div>
        <div className="flex-1 start font-fredoka mt-[5rem] ml-[3rem]">
          <h3 className="text-[50px] font-bold text-[#7E4F0E]">
            Your Classroom Awaits! Let's <br /> Inspire Together
          </h3>
        </div>
        <img
          src={teach}
          alt="Banner Illustration"
          className="absolute right-4 bottom-0 w-[35%] h-[30vh] "
        />
      </div>

      {/* Overview Cards */}
      <div className="">
        Overview
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-md shadow">
          <div className="flex items-center space-x-4">
            <div className="text-5xl font-bold text-orange-500">13</div>
            <div>
              <h4 className="text-gray-600 font-semibold">Total Students</h4>
              <p className="text-sm text-gray-500">Female: 5, Male: 8</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <div className="text-5xl font-bold text-orange-500">3</div>
          <h4 className="text-gray-600 font-semibold mt-2">Game Categories</h4>
          <p className="text-sm text-gray-500">Total</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <div className="text-5xl font-bold text-orange-500">6</div>
          <h4 className="text-gray-600 font-semibold mt-2">Game Available</h4>
          <p className="text-sm text-gray-500">Overall Total</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <div className="text-5xl font-bold text-orange-500">5</div>
          <h4 className="text-gray-600 font-semibold mt-2">Available Tutors</h4>
        </div>
      </div>

      {/* Activity Log */}
      <div className="mt-6 bg-white p-4 rounded-md shadow">
        <h4 className="text-gray-600 font-semibold mb-4">
          Videos Activity Log
        </h4>
        <div className="text-sm text-gray-500">
          <p>November 06, 2024 - 2:15 PM: You recently uploaded one video.</p>
          <p>November 06, 2024 - 2:15 PM: You recently uploaded one video.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
