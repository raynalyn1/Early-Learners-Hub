import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-8 bg-opacity-80 bg-[#ebcea8]">
      <div className="relative w-full max-w-[900px] h-full md:h-[600px] rounded-lg p-6 flex flex-col md:flex-row bg-opacity-80 bg-[#fdddb1]">
        <img
          src={img13}
          alt="Curve"
          className="absolute top-0 right-0  md:h-[56vh] w-[35vh] md:w-[50vh] opacity-90 z-0"
        />

        {/* Left Section */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center text-center p-4 sm:p-8 h-full">
          <img
            src={img10}
            alt="Parachute"
            className="absolute top-0 left-0 w-[20%] sm:w-[30%] md:w-[25%]"
          />
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mt-12 ml-6">
            Welcome Back!
          </div>

          <form className="space-y-4 sm:space-y-6 relative z-10 flex flex-col items-center mt-8 sm:mt-12 gap-3 sm:gap-5">
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg w-full max-w-[250px] sm:max-w-[300px] border-[#EB9721] border">
              <img src={img6} alt="Email Icon" className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email*"
                className="w-full bg-transparent outline-none text-gray-700 pl-3 sm:pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg w-full max-w-[250px] sm:max-w-[300px] border-[#EB9721] border">
              <img
                src={img8}
                alt="Password Icon"
                className="w-4 sm:w-5 h-4 sm:h-5 ml-2"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password*"
                className="w-full bg-transparent outline-none text-gray-700 pl-3 sm:pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="text-black py-1 sm:py-2 px-6 font-medium text-sm sm:text-base md:text-lg rounded-3xl bg-[#F9AF47] border border-[#ECA23B] shadow-lg w-[100%] sm:w-[100%] md:w-[150px] md:h-[10]"
              >
                Sign In
              </button>
            </div>
          </form>

          <img
            src={img7}
            alt="Let's Go Mascot"
            className="absolute bottom-0 right-0 w-[20%] sm:w-[25%] md:w-[20%] mr-12 md:mr-25"
          />
          <img
            src={img4}
            alt="Confetti"
            className="absolute top-15 w-[10%] sm:w-[15%] left-[16vh] sm:left-[30vh]"
          />
          <img
            src={img5}
            alt="Sunset"
            className="absolute bottom-0 w-[50%] sm:w-[60%] md:w-[70%] opacity-80 mb-[-1rem] sm:mb-[-2.3rem] z-10 left-0 md-ml[-2]"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 relative rounded-r-lg p-4 sm:p-8 flex flex-col justify-center border-t md:border-t-0 border-l md:border-l-0 md:border-l border-[#ECA23B]">
          <div className="font-semibold text-lg sm:text-xl md:text-2xl">
            Don’t have an account?
          </div>
          <p className="text-black mt-4 leading-5 sm:leading-6 text-sm sm:text-base md:text-lg">
            Sign in to your account to unlock more fun, interactive learning,
            and keep track of your child's growth and development!
          </p>
          <img
            src={img}
            alt="Clouds and birds"
            className="absolute top-0 right-0 w-[50%] sm:w-[70%] md:w-[60%] opacity-80 mb-[2rem] sm:mb-[2rem]"
          />
          <img
            src={img3}
            alt="Unicorn Mascot"
            className="absolute right-0 bottom-0 w-[30%] sm:w-[40%] md:w-[43%] mb-[-1rem] sm:mb-[-2rem]"
          />

          <div className="text-center mt-12 sm:mt-16">
            <button
              className="text-black py-1 sm:py-2 px-6 font-medium text-sm sm:text-base md:text-lg rounded-3xl border border-[#F49713] shadow-lg w-[70%] sm:w-[60%] md:w-[50%]"
              onClick={() => navigate("/register")}
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default SignIn;
