import React from "react";
import img1 from "../../images/happy.png";
import img2 from "../../images/creative.png";
import img3 from "../../images/learn.png";
import img4 from "../../images/Explore.png";
import img5 from "../../images/fun.png";
import img6 from "../../images/star.png";
import img7 from "../../images/book.png";
import img8 from "../../images/titser.png";
import img9 from "../../images/brain.png";
import img10 from "../../images/handshake.png";
import img11 from "../../images/Bullseye.png";
import img12 from "../../images/coin.png";
import img17 from "../../images/light.png";  // Updated from img
import img18 from "../../images/gem.png";   
import img19 from "../../images/cutesy.png";
import Buttons from "../../components/Buttons";
import Footer from "../../components/Footer";
import mainImg from "../../images/landingimg.png";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-[#F1F1F1] w-full px-10 pb-10 relative">
        {/* Header Section */}
        <div className="bg-[#EBCEA8] w-full flex justify-center items-center pb-20 relative">
          <div className="w-full max-w-[1200px] flex md:flex-row flex-col-reverse gap-9 items-center">
            <div className="w-full md:w-[50%] flex flex-col gap-[2rem] justify-center">
              <div className="text-[45px] md:text-[50px] font-[700] leading-tight text-black ml-[3rem] mt-[2rem] ">
                Enhance Learning <br /> with Group Tutoring at EarlyLearnersHub
                Tutorial Services!
              </div>
              <div className="flex justify-start">
                <Buttons styleType="primary" label="ENROLL NOW!" />
              </div>
            </div>
            <div className="w-full md:w-[50%] flex justify-end items-center ">
              <img
                src={mainImg}
                alt="pic"
                className="h-[67vh] max-h-[100vh] object-contain w-full mt-[1rem] "
              />
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-[#EBCEA8] w-full  relative  ">
          <div className="text-[20px] font-semibold mb-7 flex-start ml-[5rem] ">
            Explore Fun Activities
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-[5rem] ">
            <div className="text-center">
              <img
                src={img1}
                alt="Happy Learning"
                className="rounded-lg object-cover w-full h-[200px]"
              />
              <div className="text-lg font-semibold mt-4">Happy Learning</div>
              <div className="text-black-500">Imagination Center</div>
            </div>
            <div className="text-center">
              <img
                src={img2}
                alt="Creative Playtime"
                className="rounded-lg object-cover w-full h-[200px]"
              />
              <div className="text-lg font-semibold mt-4">
                Creative Playtime
              </div>
              <div className="text-black-500">Imagination Center</div>
            </div>
            <div className="text-center">
              <img
                src={img3}
                alt="Giggle and Learn"
                className="rounded-lg object-cover w-full h-[200px]"
              />
              <div className="text-lg font-semibold mt-4">Giggle and Learn</div>
              <div className="text-black-500">Laughing Academy</div>
            </div>
            <div className="text-center">
              <img
                src={img4}
                alt="Let's Explore"
                className="rounded-lg object-cover w-full h-[200px]"
              />
              <div className="text-lg font-semibold mt-4">Let's Explore</div>
              <div className="text-black-500">Discovering New Things</div>
            </div>
            <div className="text-center">
              <img
                src={img5}
                alt="Fun is Here!"
                className="rounded-lg object-cover w-full h-[200px]"
              />
              <div className="text-lg font-semibold mt-4">Fun is Here!</div>
              <div className="text-black-500">Lily Colors, ABCs</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-[#EBCEA8] w-full px-20 py-20 relative  ">
          <div className="flex justify-between items-center">
            {/* Left Side: List of benefits */}
            <div className="flex flex-col gap-4 w-full md:w-[50%]">
              <div className="text-[20px] font-semibold ">
                Discover the benefits of our group tutoring sessions:
              </div>
              <div className="flex items-center gap-4">
                <img src={img6} alt="Star" className="w-[60px]" />
                <span className="font-semibold text-[18px]">
                  Collaborative Learning
                </span>
              </div>
              <div className="flex items-center gap-4">
                <img src={img7} alt="Book" className="w-[55px]" />
                <span className="font-semibold text-[18px]">
                  Interactive Sessions
                </span>
              </div>
              <div className="flex items-center gap-4">
                <img src={img8} alt="Teacher" className="w-[60px]" />
                <span className="font-semibold text-[18px] mr-[5rem]">
                  Expert Guidance
                </span>
              </div>
              <div className="flex items-center gap-4">
                <img src={img9} alt="Brain" className="w-[60px]" />
                <span className="font-semibold text-[18px]">
                  Enhanced Problem-Solving Skills
                </span>
              </div>
              <div className="flex items-center gap-4">
                <img src={img10} alt="Handshake" className="w-[50px]" />
                <span className="font-semibold text-[18px]">
                  Social Skills Development
                </span>
              </div>
              <div className="flex items-center gap-4">
                <img src={img11} alt="Bullseye" className="w-[50px]" />
                <span className="font-semibold text-[18px]">
                  Diverse Perspectives
                </span>
              </div>
              <div className="flex items-center gap-4 mr-[5rem]">
                <img src={img12} alt="Coin" className="w-[55px]  " />

                <span className="font-semibold text-[18px] ">
                  Affordable Learning
                </span>
              </div>
            </div>

            {/* Right Side: Main Image with ABC blocks */}
            <div className="w-full md:w-[50%] flex justify-center relative">
              <div className="relative">
                <img
                  src={img19}
                  alt="Kid with ABC blocks"
                  className="w-[100%] h-auto"
                />
               
               
                
              </div>
            </div>
          </div>

         
          <div className="text-center text-[24px] font-semibold mt-[5rem]">
  PILLARS OF STRENGTH
</div>
          {/* New Section Below Button */}
<div className="flex justify-around py-10 gap-6">
  <div className="text-center border border-gray-300 p-10 rounded-lg w-[30%] bg-white shadow-md">
    <img src={img11} alt="Bullseye Icon" className="mx-auto mb-4 w-[70px]" />
    <h3 className="text-lg font-semibold">Our Mission</h3>
    <p>
      To create a safe, engaging, and enjoyable learning platform that supports
      early childhood education, providing interactive content that helps kids
      learn and grow.
    </p>
  </div>

  <div className="text-center border border-gray-300 p-10 rounded-lg w-[30%] bg-white shadow-md">
    <img src={img17} alt="Light Bulb Icon" className="mx-auto mb-4 w-[70px]" />
    <h3 className="text-lg font-semibold">Our Vision</h3>
    <p>
      To inspire a love of learning in kindergarten kids through fun,
      interactive, and educational activities.
    </p>
  </div>

  <div className="text-center border border-gray-300 p-10 rounded-lg w-[30%] bg-white shadow-md">
    <img src={img18} alt="Gem Icon" className="mx-auto mb-4 w-[70px]" />
    <h3 className="text-lg font-semibold">Our Values</h3>
    <p>
      Our values prioritize fun, basic skills, creativity, safety, and inclusion,
      collaborating with teachers, parents, and experts to create a secure,
      kid-friendly platform.
    </p>
  </div>
</div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;