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
import Footer from "../../components/Footer";
import mainImg from "../../images/landingimg.png";

const LandingPage = () => {
  return (
    <div>
      {/* Main Container */}
      <div className="bg-[#EB9721] w-full px-5 relative ">
        {/* Tagline Section with shadow */}
        <div className="bg-[#EBCEA8] w-full flex flex-col-reverse lg:flex-row justify-center items-center pb-20 relative h-auto lg:h-[100%] ">
          {/* Left: Tagline beside the image */}
          <div className="mt-4 w-full lg:max-w-[50%] px-4 lg:px-0">
            <h1 className="text-[2rem] lg:text-[3rem] font-bold leading-tight ml-0 lg:ml-[10rem] mt-[4vh] lg:mt-[12vh]">
              Early Learners Hub
            </h1>
            <p className="text-[1.2rem] lg:text-[1.5rem] leading-snug font-medium ml-0 lg:ml-[10rem] mt-4">
              Where learning meets play, you can game your way to growth!
            </p>
          </div>

          {/* Right: Main Image */}
          <div className="w-full lg:max-w-[50%] flex justify-center lg:justify-end items-center">
            <img
              src={mainImg}
              alt="Main"
              className="h-[40vh] lg:h-[60vh] max-h-[60vh] object-contain w-full lg:w-[80%] transform ml-0 lg:ml-[5rem]"
            />
          </div>
        </div>

        {/* Activities Section with shadow */}
        <div className="bg-[#EBCEA8] w-full py-10 relative">
          <div className="text-[1.5rem] font-semibold mb-7 text-center lg:text-left lg:ml-[5rem]">
            Explore Fun Activities
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-[2rem] lg:px-[5rem]">
            {[{ img: img1, title: "Happy Learning" }, 
               { img: img2, title: "Creative Playtime" },
               { img: img3, title: "Giggle and Learn" },
               { img: img4, title: "Let's Explore" },
               { img: img5, title: "Fun is Here!" }].map((item, idx) => (
                <div className="text-center" key={idx}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-lg object-cover w-full h-[150px] lg:h-[200px] border-2 border-[#EB9721] transition-transform duration-300 transform hover:scale-105"
                  />
                  <div className="text-lg font-semibold mt-4">{item.title}</div>
                </div>
              ))}
          </div>
        </div>

       
        <div className="bg-[#EBCEA8] w-full px-5 lg:px-20 py-10 shadow-lg">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col gap-4 w-full lg:w-[50%] ml-0 lg:ml-[10rem]">
              {/* <div className="text-[1.5rem] font-semibold">
                Discover more benefits:
              </div> */}
              {/* {[{ img: img6, title: "Collaborative Learning" },
                { img: img7, title: "Interactive Sessions" },
                { img: img8, title: "Expert Guidance" },
                { img: img9, title: "Enhanced Problem-Solving Skills" }].map((benefit, idx) => (
                  <div className="flex items-center gap-4" key={idx}>
                    <img
                      src={benefit.img}
                      alt={benefit.title}
                      className="w-[15%] h-auto"
                    />
                    <span className="font-semibold text-[1rem] lg:text-[18px]">
                      {benefit.title}
                    </span>
                  </div>
                ))} */}
            </div>

            <div className="w-full lg:w-[50%] flex justify-center relative mt-10 lg:mt-0">
             
            </div>
          </div>

        {/* Pillars of Strength Section */}
        <div className="text-center text-[2.5rem] lg:text-[40px] mt-[4rem] lg:mt-[6rem]" style={{ fontFamily: "'Poppins'" }}>
          PILLARS OF STRENGTH
        </div>

        {/* Mission, Vision, Values Section with shadow */}
        <div className="flex flex-wrap justify-around mt-10">
          {[{ img: img10, title: "Our Mission", description: "To create a safe, engaging, and enjoyable learning platform that supports early childhood education, providing interactive content that helps kids learn and grow." },
            { img: img17, title: "Our Vision", description: "To inspire a love of learning in kindergarten kids through fun, interactive, and educational activities." },
            { img: img18, title: "Our Values", description: "Our values prioritize fun, basic skills, creativity, safety, and inclusion collaborating with teachers, parents, and experts to create a secure, kid-friendly platform." }].map((pillar, idx) => (
              <div
                key={idx}
                className="text-center mb-10 lg:mb-0 p-4 lg:p-6 rounded-lg w-full sm:w-[45%] lg:w-[20%] h-auto lg:h-[55vh] bg-white bg-opacity-60 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ border: '2px solid #EB9721 ' }}
              >
                <img
                  src={pillar.img}
                  alt={pillar.title}
                  className="mx-auto mb-4 lg:mb-6 w-[20%] lg:w-[30%]"
                />
                <h3 className="text-md lg:text-lg font-semibold mb-2 lg:mb-4">{pillar.title}</h3>
                <p className="text-sm lg:text-base">{pillar.description}</p>
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
