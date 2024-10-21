import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import img from "../../images/LogIn/CD.png"; // Clouds and Birds
import img3 from "../../images/LogIn/Uni.png"; // Unicorn at bottom-right
import img4 from "../../images/LogIn/stars.png"; // Confetti near text
import img6 from "../../images/LogIn/Pencil.png"; // Pencil for Email
import img8 from "../../images/LogIn/Lock.png"; // Lock icon for Password
import img10 from "../../images/LogIn/cute.png"; // Parachute icon
import img7 from "../../images/LogIn/brd.png"; // Extra birds/clouds
import img13 from "../../images/LogIn/rt.png"; // Curve background
import img5 from "../../images/LogIn/sunset.png"; // Sunset image

const SignIn = () => {
  const navigate = useNavigate(); // Declare navigate function

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
          className="absolute top-0 right-0 h-[30vh] md:h-[63vh] w-[35vh] md:w-[55vh] opacity-90"
          style={{ zIndex: 0 }}
        />

        {/* Left Section */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center text-center p-4 sm:p-8 h-full">
          <img
            src={img10}
            alt="Parachute"
            className="absolute top-0 left-0 w-[20%] sm:w-[30%]"
          />
          <div className="text-xl sm:text-2xl font-semibold text-black mt-[3rem] ml-[3rem]">
            Welcome Back!
          </div>

          <form className="space-y-4 sm:space-y-6 relative z-10 flex flex-col items-center mt-[4rem] sm:mt-[9vh] gap-3 sm:gap-5">
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg w-full max-w-[250px] sm:max-w-[300px]">
              <img src={img6} alt="Email Icon" className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              <input
                type="email"
                placeholder="Email*"
                className="w-full bg-transparent outline-none text-gray-700 pl-3 sm:pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg w-full max-w-[250px] sm:max-w-[300px]">
              <img src={img8} alt="Password Icon" className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              <input
                type="password"
                placeholder="Password*"
                className="w-full bg-transparent outline-none text-gray-700 pl-3 sm:pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-[#F9AF47] text-black py-1 sm:py-2 px-6 sm:px-10 font-medium text-sm sm:text-lg rounded-3xl hover:bg-yellow-500"
              >
                Sign In
              </button>
            </div>
          </form>

          <img
            src={img7}
            alt="Let's Go Mascot"
            className="absolute bottom-0 w-[20%] sm:w-[30%] ml-[12rem] sm:ml-[23rem]"
          />
          {/* Images on Left Section */}

          <img
            src={img4}
            alt="Confetti"
            className="absolute top-15 w-[10%] sm:w-[15%] left-[16vh] sm:left-[32vh]"
          />
          {/* Sunset Image */}
          <img
            src={img5}
            alt="Sunset"
            className="absolute bottom-0 w-[50%] sm:w-[70%] opacity-80 mb-[-1rem] sm:mb-[-2.4rem] z-10 mr-[8rem] sm:mr-[15rem]"
          />
        </div>

        {/* Right Section (Sign In Form) */}
        <div
          className="w-full md:w-1/2 relative rounded-r-lg p-4 sm:p-8 flex flex-col justify-center"
          style={{ borderColor: "#ECA23B" }}
        >
          <div className="font-semibold text-lg sm:text-xl">Don’t have an account?</div>
          <p className="text-black-900 mt-4 leading-5 sm:leading-6 text-sm sm:text-base">
            Sign in to your account to unlock more fun, interactive learning,
            and keep track of your child's growth and development!
          </p>
          <img
            src={img}
            alt="Clouds and birds"
            className="absolute top-0 right-0 w-[50%] sm:w-[80%] h-[20%] sm:h-[30%] opacity-80 mb-[2rem] sm:mb-[2rem]"
          />
          <img
            src={img3}
            alt="Unicorn Mascot"
            className="absolute right-0 bottom-0 w-[30%] sm:w-[45%] mb-[-1rem] sm:mb-[-2rem]"
          />
          {/* Right-side Images */}

          {/* Sign Up Now Button */}
          <div className="text-center mt-[3rem] sm:mt-[4rem]">
            <button
              className="bg-[#F9AF47] text-black py-1 sm:py-2 px-6 sm:px-10 font-medium text-sm sm:text-lg rounded-3xl hover:bg-yellow-500"
              onClick={() => navigate("/register")} // Navigate to Register page
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
