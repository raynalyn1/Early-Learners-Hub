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

import img10 from "../../images/ey.png";

import img17 from "../../images/light.png";
import img18 from "../../images/gem.png";
import img19 from "../../images/cutesy.png";
// import Buttons from "../../components/Buttons";
import Footer from "../../components/Footer";
import mainImg from "../../images/landingimg.png";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-[#EB9721] w-full px-5 relative ">
        
       
        
        {/* Tagline Section with updated styling */}
        <div className="bg-[#EBCEA8] w-full flex justify-center items-center pb-20 relative h-[100%]">
          {/* Add tagline beside the image */}
          <div className="mt-4 max-w-[50%] ml-[3rem]">
            <h1 className="text-[3rem] font-bold leading-tight  flex items-center w-[100%]  ml-[10rem] mt-[12vh]">Early Learners Hub</h1>
            <p className="text-[1.5rem] leading-snug font-medium  ml-[10rem]">
              Where learning meets play, you can game your way to growth!
            </p>
            {/* <Buttons styleType="primary" label="Start Exploring!" /> */}
          </div>
          <div className="w-full max-w-[1200px] flex md:flex-row flex-col-reverse gap-5 items-center">
            <div className="w-full flex justify-end items-center">
              <img
                src={mainImg}
                alt="pic"
                className="h-[60vh] max-h-[60vh] object-contain w-full   transform ml-[5rem] "
              />
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-[#EBCEA8] w-full relative">
          <div className="text-[20px] font-semibold mb-7 flex-start ml-[5rem] ">Explore Fun Activities</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-[5rem] ">
            {[{ img: img1, title: "Happy Learning"}, 
               { img: img2, title: "Creative Playtime" },
               { img: img3, title: "Giggle and Learn"},
               { img: img4, title: "Let's Explore" },
               { img: img5, title: "Fun is Here!" }]
              .map((item, idx) => (
                <div className="text-center" key={idx}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-lg object-cover w-full h-[200px] border-2 border-[#EB9721] transition-transform duration-300 transform hover:scale-105"
                  />
                  <div className="text-lg font-semibold mt-4">{item.title}</div>
                  <div className="text-black-500">{item.subtitle}</div>
                </div>
              ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-[#EBCEA8] w-full px-20 py-5 relative ">
          <div className="flex justify-between items-center">
        
            <div className="flex flex-col gap-4 w-full md:w-[50%] ml-[10rem]">
               <div className="text-[20px] font-semibold">
                Discover  more benefits:
              </div> 
               {[{ img: img6, title: "Collaborative Learning" },
                { img: img7, title: "Interactive Sessions" },
                { img: img8, title: "Expert Guidance" },
                { img: img9, title: "Enhanced Problem-Solving Skills" },
                
               
              ]
                .map((benefit, idx) => (
                  <div className="flex items-center gap-4" key={idx}>
                    <img src={benefit.img} alt={benefit.title} className="w-[10%] h-[50%]" />
                    <span className="font-semibold text-[18px]">{benefit.title}</span>
                  </div>
                ))} 
            </div>

            {/* Right Side: Main Image with ABC blocks */}
            <div className="w-full md:w-[50%] flex justify-center relative">
              <div className="relative">
                <img
                  src={img19}
                  alt="Kid with ABC blocks"
                  className="w-[100%] h-auto transition-transform duration-300 transform hover:scale-125"
                />
              </div>
            </div>
          </div>

          {/* Pillars of Strength Section */}
          <div className="text-center text-[40px]  mt-[6rem]" style={{ fontFamily: "'Poppins'" }}>
            PILLARS OF STRENGTH
          </div>

          {/* Mission, Vision, Values Section  */}
          <div className="flex justify-around mt-[2rem] ">
            {[{ img: img10, title: "Our Mission", description: "To create a safe, engaging, and enjoyable learning platform that supports early childhood education, providing interactive content that helps kids learn and grow." },
              { img: img17, title: "Our Vision", description: "To inspire a love of learning in kindergarten kids through fun, interactive, and educational activities." },
              { img: img18, title: "Our Values", description: "Our values prioritize fun, basic skills, creativity, safety, and inclusion collaborating with teachers, parents, and experts to create a secure, kid-friendly platform." }]
              .map((pillar, idx) => (
                <div
                  key={idx}
                  className="text-center mb-[5rem] p-[1rem] rounded-lg w-[20%] h-[35vh] bg-white bg-opacity-60 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                  style={{ border: '2px solid #EB9721 ' }}
                >
                  <img src={pillar.img} alt={pillar.title} className="mx-auto mb-6 w-[30%]" />
                  <h3 className="text-lg font-semibold mb-4 text-center">{pillar.title}</h3>
                  <p className="text-center">{pillar.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;