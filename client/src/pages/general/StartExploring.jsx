import React from "react";

import Footer from "../../components/Footer";

import imgDog from "../../images/awh.png";
import imgBunny from "../../images/bunny.png";

import iconGame from "../../images/Game Controller.png";
import iconVideo from "../../images/video.png";

const StartExploring = () => {
  return (
    <div>
      {/* Top Border */}
      <div className="border bg-[#EB9721] w-full px-6 py-6"></div>

      {/* Main Content */}
      <div className="bg-[#F2D3B1] py-10 flex flex-col items-center relative">
        {/* Second Section: Games */}
        <div className="flex items-center justify-center space-x-4 ">
          <img
            src={imgDog}
            alt="Dog with ball"
            className="w-[30vh] h-auto mb-3"
          />
          <button className="bg-[#E2A356] text-black px-6 py-3 text-3xl rounded-[10px] flex items-center justify-center gap-2">
            <span>GAMES</span>
            <img
              src={iconGame}
              alt="Game Controller Icon"
              className="w-[100%] h-[40px]"
            />
          </button>
        </div>

        {/* Third Section: Videos */}
        <div className="flex items-center justify-center space-x-4   ">
          <img
            src={imgBunny}
            alt="Bunny with tablet"
            className="w-[30vh] h-auto mb-3 "
          />
          <button className="bg-[#E2A356] text-black px-6 py-3 text-3xl rounded-[10px] flex items-center justify-center gap-2">
            <span>VIDEOS</span>
            <img
              src={iconVideo}
              alt="Video Icon"
              className="w-[100%] h-[40px]"
            />
          </button>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border bg-[#EB9721] w-full px-6 py-6"></div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default StartExploring;
