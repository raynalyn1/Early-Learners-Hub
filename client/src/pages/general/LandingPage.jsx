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
import img17 from "../../images/light.png";
import img18 from "../../images/gem.png";
import img19 from "../../images/cutesy.png";
import Buttons from "../../components/Buttons";
import Footer from "../../components/Footer";
import mainImg from "../../images/landingimg.png";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-[#EB9721] w-full px-5 relative ">
        
        {/* Header Section */}
        <div>
          
        </div>
        
        {/* Tagline Section with updated styling */}
        <div className="bg-[#EBCEA8] w-full flex justify-center items-center pb-20 relative h-[100%]">
          {/* Add tagline beside the image */}
          <div className="mt-4 max-w-[50%] ml-[5rem]">
            <h1 className="text-[3rem] font-bold leading-tight  flex items-center w-[100%]  ml-[10rem] mt-[12vh]">Early Learners Hub</h1>
            <p className="text-[1.5rem] leading-snug font-medium  ml-[10rem]">
              Where learning meets play, you can game your way to growth!
            </p>
            <Buttons styleType="primary" label="Start Exploring!" />
          </div>
          <div className="w-full max-w-[1200px] flex md:flex-row flex-col-reverse gap-5 items-center">
            <div className="w-full md:w-[58%] flex justify-end items-center">
              <img
                src={mainImg}
                alt="pic"
                className="h-[50vh] max-h-[50vh] object-contain w-full   transform ml-[100%]"
              />
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-[#EBCEA8] w-full relative">
          <div className="text-[20px] font-semibold mb-7 flex-start ml-[5rem]">Explore Fun Activities</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-[5rem]">
            {[{ img: img1, title: "Happy Learning", subtitle: "Imagination Center" }, 
               { img: img2, title: "Creative Playtime", subtitle: "Imagination Center" },
               { img: img3, title: "Giggle and Learn", subtitle: "Laughing Academy" },
               { img: img4, title: "Let's Explore", subtitle: "Discovering New Things" },
               { img: img5, title: "Fun is Here!", subtitle: "Lily Colors, ABCs" }]
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
        <div className="bg-[#EBCEA8] w-full px-20 py-20 relative">
          <div className="flex justify-between items-center">
            {/* Left Side: List of benefits */}
            <div className="flex flex-col gap-4 w-full md:w-[50%]">
              <div className="text-[20px] font-semibold">
                Discover the benefits of our group tutoring sessions:
              </div>
              {[{ img: img6, title: "Collaborative Learning" },
                { img: img7, title: "Interactive Sessions" },
                { img: img8, title: "Expert Guidance" },
                { img: img9, title: "Enhanced Problem-Solving Skills" },
                { img: img10, title: "Social Skills Development" },
                { img: img11, title: "Diverse Perspectives" },
                { img: img12, title: "Affordable Learning" }]
                .map((benefit, idx) => (
                  <div className="flex items-center gap-4" key={idx}>
                    <img src={benefit.img} alt={benefit.title} className="w-[60px]" />
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
          <div className="text-center text-[40px] font-bold mt-[6rem]" style={{ fontFamily: "'Poppins'" }}>
            PILLARS OF STRENGTH
          </div>

          {/* Mission, Vision, Values Section */}
          <div className="flex justify-around py-10">
            {[{ img: img11, title: "Our Mission", description: "To create a safe, engaging, and enjoyable learning platform that supports early childhood education, providing interactive content that helps kids learn and grow." },
              { img: img17, title: "Our Vision", description: "To inspire a love of learning in kindergarten kids through fun, interactive, and educational activities." },
              { img: img18, title: "Our Values", description: "Our values prioritize fun, basic skills, creativity, safety, and inclusion collaborating with teachers, parents, and experts to create a secure, kid-friendly platform." }]
              .map((pillar, idx) => (
                <div
                  key={idx}
                  className="text-center p-20 rounded-lg w-[24%] bg-white bg-opacity-60 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                  style={{ border: '2px solid #EB9721' }}
                >
                  <img src={pillar.img} alt={pillar.title} className="mx-auto mb-6 w-[90px]" />
                  <h3 className="text-lg font-semibold mb-4">{pillar.title}</h3>
                  <p className="text-left">{pillar.description}</p>
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
