import React from "react";
import img from "../../images/Registration/cloudsBirds.png"; // Background clouds and birds
import img3 from "../../images/Registration/Comeback.png"; // Rocket mascot at the bottom left
import img4 from "../../images/Registration/Confett.png"; // Confetti near text
import img6 from "../../images/Registration/Email.png"; // Email icon
import img7 from "../../images/Registration/imageGo.png"; // "Let's Go" mascot at the bottom-right
import img8 from "../../images/Registration/Lock.png"; // Password icon
import img9 from "../../images/Registration/Name.png"; // Name icon
import img10 from "../../images/Registration/parachute.png"; // Parachute icon
import img11 from "../../images/Registration/Pencil.png"; // Pencil icon for Username
import img12 from "../../images/Registration/sunsetclouds.png"; // Sunset clouds image
import img13 from "../../images/Registration/rec.png"; // Curve image

const Register = () => {
  return (
    
    <div
      className="flex justify-center items-center min-h-screen p-4 sm:p-8"
      style={{ backgroundColor: "rgba(235, 206, 168, 0.8)" }}
    >
      <div
        className="relative w-full max-w-[900px] h-full md:h-[600px] rounded-lg  p-6 flex flex-col md:flex-row"
        style={{ backgroundColor: "rgba(253, 221, 177, 0.8)" }}
      >
        <img
          src={img13}
          alt="Curve"
          className="absolute top-0 left-0 h-[30vh] md:h-[63vh] w-full md:w-[60vh] opacity-70"
          style={{ zIndex: 0 }} // Behind the text
        />
        {/* Left Section */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center text-center p-4 sm:p-8 h-full">
          <div className="text-2xl sm:text-3xl font-semibold text-black mt-[3rem] md:mt-[7rem] ml-[3rem]">
            Join the fun! 🎉
          </div>
          <p className="text-black-900 mt-4 leading-6 text-sm sm:text-base">
            You're almost there! Sign up for a FREE Early Learners Hub account
            and explore a world where learning meets play. With fun games and
            activities, your child will enjoy an engaging journey of growth and
            development. Don’t miss out—join today!
          </p>

          {/* Images on Left Section */}
          <img
            src={img}
            alt="Clouds and birds"
            className="absolute top-0 left-0 w-[80%] h-[20%] md:h-[30%] opacity-80 mb-[3rem]"
          />
          <img
            src={img3}
            alt="Rocket Mascot"
            className="absolute left-0 bottom-0 w-[30%] sm:w-[40%] mb-[-1rem] md:mb-[-2rem]"
          />
          <img
            src={img4}
            alt="Confetti"
            className="absolute top-20 w-[20%] sm:w-[30%] ml-[12rem] sm:ml-[20rem]"
          />
          <img
            src={img12}
            alt="Sunset Clouds"
            className="absolute bottom-0 left-[20%] md:left-[30%] w-[70%] md:w-[85%] opacity-100 mb-[-1rem] md:mb-[-2.5rem] ml-[4rem] sm:ml-[rem]"
          />
        </div>

        {/* Right Section (Form) */}
        <div
          className="w-full md:w-1/2 relative rounded-r-lg p-4 sm:p-8 flex flex-col justify-center ml-[8rem]"
          style={{ borderColor: "#ECA23B" }}
        >
          <form className="space-y-4 sm:space-y-6 relative z-10">
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg">
              <img src={img9} alt="Name Icon" className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              <input
                type="text"
                placeholder="Name*"
                className="w-full bg-transparent outline-none text-gray-700 pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg">
              <img src={img6} alt="Email Icon" className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              <input
                type="email"
                placeholder="Email*"
                className="w-full bg-transparent outline-none text-gray-700 pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg">
              <img src={img11} alt="Pencil Icon" className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              <input
                type="text"
                placeholder="Username*"
                className="w-full bg-transparent outline-none text-gray-700 pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg">
              <img src={img8} alt="Password Icon" className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              <input
                type="password"
                placeholder="Password*"
                className="w-full bg-transparent outline-none text-gray-700 pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="flex items-center bg-[#F9AF47] text-black py-2 px-6 sm:px-8 md:px-10 font-medium text-sm sm:text-base md:text-lg rounded-3xl hover:bg-yellow-500"
              >
            
                Sign Up
              </button>
            </div>
          </form>

          {/* Right-side Images */}
          <img
            src={img10}
            alt="Parachute"
            className="absolute top-0 right-2 sm:right-8 w-[20%] sm:w-[30%]"
          />
          <img
            src={img7}
            alt="Let's Go Mascot"
            className="absolute bottom-0 right-2 sm:right-6 w-[20%] sm:w-[30%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
