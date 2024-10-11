import React from 'react';
import img from "../../images/videos1.png";
import img1 from "../../images/videos2.png";
import img2 from "../../images/videos3.png";
import img3 from "../../images/videos4.png";
import img4 from "../../images/videos5.png";
import img5 from "../../images/videos6.png";
import Footer from '../../components/Footer';
import img6 from "../../images/Search.png";

function GameSection() {
  return (
    <div>
        <div className="bg-[#EB9721] w-full px-5 relative ">
        
    <div className=" bg-[#EBCEA8] w-full px-5 ">
      

      {/* Search Section */}
      <section className="flex justify-between pr-[10vh] pt-9 w-[]">
        <h2 className="text-2xl font-semibold mb-4 ">Educational Videos</h2>
        <div className="relative  ">
          <input 
            type="text" 
            placeholder="Search videos here!" 
            className=" p-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 w-[100%] h-[4vh]"
          />
          <img 
            src={img6} 
            alt="Search Icon" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 " 
          />
        </div>
      </section>

      {/* Videos Section */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center flex space-x-30 px-[20vh]">
        {/* Video Cards */}
        <div className="bg-[#F0BC78] p-4 rounded-lg shadow-lg w-[100%] ">
          <img src={img} alt="Animal Nursery Rhyme" className="rounded-md  w-full" />
          <h3 className="text-lg font-bold mt-2">Animal Nursery Rhyme</h3>
          <p className="text-black">A fun and engaging nursery rhyme featuring animated animals.</p>
          <button className="mt-4 px-4 py-2 text-white bg-[#ECA23B] rounded-md hover:bg-yellow-600">
            WATCH
          </button>
        </div>

        <div className="bg-[#F0BC78] p-4 rounded-lg shadow-lg w-[100%]">
          <img src={img1} alt="Magical Forest Adventure" className="rounded-md  w-full" />
          <h3 className="text-lg font-bold mt-2">Magical Forest Adventure</h3>
          <p className="text-black">Follow the adventures of a little girl in a magical forest.</p>
          <button className="mt-4 px-4 py-2 text-white bg-[#ECA23B] rounded-md hover:bg-yellow-600">
            WATCH
          </button>
        </div>

        <div className="bg-[#F0BC78] p-4 rounded-lg shadow-lg w-[100%]">
          <img src={img2} alt="Learning Numbers Song" className="rounded-md  w-full" />
          <h3 className="text-lg font-bold mt-2">Learning Numbers Song</h3>
          <p className="text-black">A catchy song that helps children learn numbers.</p>
          <button className="mt-4 px-4 py-2 text-white bg-[#ECA23B] rounded-md hover:bg-yellow-600">
            WATCH
          </button>
        </div>

        <div className="bg-[#F0BC78] p-4 rounded-lg shadow-lg w-[100%]">
          <img src={img3} alt="Space Exploration" className="rounded-md  w-full" />
          <h3 className="text-lg font-bold mt-2">Space Exploration</h3>
          <p className="text-black">An animated journey through the solar system in a spaceship.</p>
          <button className="mt-4 px-4 py-2 text-white bg-[#ECA23B] rounded-md hover:bg-yellow-600">
            WATCH
          </button>
        </div>

        <div className="bg-[#F0BC78] p-4 rounded-lg shadow-lg w-[100%]">
          <img src={img4} alt="Alphabet Song" className="rounded-md  w-full" />
          <h3 className="text-lg font-bold mt-2">Alphabet Song</h3>
          <p className="text-black">A fun and engaging song to help children learn the alphabet.</p>
          <button className="mt-4 px-4 py-2 text-white bg-[#ECA23B] rounded-md hover:bg-yellow-600">
            WATCH
          </button>
        </div>

        <div className="bg-[#F0BC78] p-4 rounded-lg shadow-lg w-[100%]">
          <img src={img5} alt="Farm Life Song" className="rounded-md w-full" />
          <h3 className="text-lg font-bold mt-2">Farm Life Song</h3>
          <p className="text-black">An animated song about life on a farm with various animals.</p>
          <button className="mt-4 px-4 py-2 text-white bg-[#ECA23B] rounded-md hover:bg-yellow-600">
            WATCH
          </button>
        </div>
      </section>

      </div>
    </div>
    <Footer/>
    </div>
    
  );
}


