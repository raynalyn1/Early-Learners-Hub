import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Image imports
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/auth/login";
    const data = { email, password };

    try {
      const response = await axios.post(url, data);
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("name", response.data.name);
      toast.success("Login successful!", { className: "success-toast" });
      navigate("/admin");
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if (status === 400 || status === 401) {
          toast.error(data.message || "Invalid email or password", {
            className: "error-toast",
          });
        } else {
          toast.error("An unexpected error occurred. Please try again later.", {
            className: "error-toast",
          });
        }
      } else {
        toast.error(
          "Cannot connect to the server. Please check your internet connection.",
          { className: "error-toast" }
        );
      }
    }
  };

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

          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 relative z-10 flex flex-col items-center mt-[4rem] sm:mt-[9vh] gap-3 sm:gap-5"
          >
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
                className="bg-[#F9AF47] text-black py-1 sm:py-2 px-6 sm:px-10 font-medium text-sm sm:text-lg rounded-3xl  shadow-lg"
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
          <img
            src={img4}
            alt="Confetti"
            className="absolute top-15 w-[10%] sm:w-[15%] left-[16vh] sm:left-[32vh]"
          />
          <img
            src={img5}
            alt="Sunset"
            className="absolute bottom-0 w-[50%] sm:w-[70%] opacity-80 mb-[-1rem] sm:mb-[-2.4rem] z-10 mr-[8rem] sm:mr-[15rem]"
          />
        </div>

        {/* Right Section */}
        <div
          className="w-full md:w-1/2 relative rounded-r-lg p-4 sm:p-8 flex flex-col justify-center"
          style={{ borderColor: "#ECA23B" }}
        >
          <div className="font-semibold text-lg sm:text-xl">
            Don’t have an account?
          </div>
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
          <div className="text-center mt-[3rem] sm:mt-[4rem] ">
            <button
              className="text-black py-1 sm:py-2 px-6 font-medium text-sm sm:text-[16px] rounded-3xl border border-[#F49713] shadow-lg w-[42%] h-[5vh]"
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
