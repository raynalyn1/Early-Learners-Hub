import React, { useState } from "react";
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
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert('Password do not match');
    }

    const url = 'http://localhost:3000/auth/register';
    const data = { name, email, password, confirmPassword };

    try {
      const response = await axios.post(url, data);
      console.log('Response:', response.data);

      //  Navigate to login 
      navigate('/login');

    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
  }


  return (
    <div className="flex justify-center items-center h-[91vh] p-4 sm:p-8 bg-[#ebcea8] bg-opacity-80">
      <div className="relative w-full max-w-[900px] h-full md:h-[600px] rounded-lg p-6 flex flex-col md:flex-row bg-[#fdddb1] bg-opacity-80">
        {/* Background Curve */}
        <img
          src={img13}
          alt="Curve"
          className="absolute top-0 left-0 h-[25vh] md:h-[56vh] w-full md:w-[50vh] opacity-70 z-0"
        />

        {/* Left Section */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center text-center p-4 sm:p-10 h-full">
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mt-8 md:mt-7">
            Join the fun! 🎉
          </div>
          <p className="text-gray-800 mt-12 leading-5 sm:leading-6 text-sm sm:text-base md:text-lg px-4">
            You're almost there! Sign up for a FREE Early Learners Hub account
            and explore a world where learning meets play. With fun games and
            activities, your child will enjoy an engaging journey of growth and
            development. Don’t miss out—join today!
          </p>

          {/* Background Images */}
          <img
            src={img}
            alt="Clouds and birds"
            className="absolute top-0 left-0 w-[60%] sm:w-[50%] opacity-80 mt-4"
          />
          <img
            src={img3}
            alt="Rocket Mascot"
            className="absolute left-0 bottom-0 w-[20%] sm:w-[30%] mb-[-1rem] md:mb-[-2rem]"
          />
          <img
            src={img4}
            alt="Confetti"
            className="absolute top-24 left-[60%] w-[15%] sm:w-[20%] md:w-[25%]"
          />
          <img
            src={img12}
            alt="Sunset Clouds"
            className="absolute bottom-0 left-[15%] md:left-[55%] w-[50%] sm:w-[60%] opacity-80 mb-[-1rem] sm:mb-[-2rem] md:mb-[-2rem]"
          />
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center justify-center p-4 sm:p-8  md:border-t-0  rounded-r-lg">
          <form className="space-y-4 sm:space-y-6 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[320px] relative z-10">
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg border border-[#EB9721]">
              <img src={img9} alt="Name Icon" className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name*"
                className="w-full bg-transparent outline-none text-gray-700 pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg border border-[#EB9721]">
              <img src={img6} alt="Email Icon" className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email*"
                className="w-full bg-transparent outline-none text-gray-700 pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg border border-[#EB9721]">
              <img src={img11} alt="Pencil Icon" className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password*"
                className="w-full bg-transparent outline-none text-gray-700 pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="relative flex items-center bg-white p-2 sm:p-3 rounded-3xl shadow-lg border border-[#EB9721]">
              <img src={img8} alt="Password Icon" className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password*"
                className="w-full bg-transparent outline-none text-gray-700 pl-4 text-sm sm:text-base"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-[#F9AF47] text-black py-2 px-6 sm:px-8 md:px-10 font-medium text-sm sm:text-base md:text-lg rounded-3xl shadow-md"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Right-side Images */}
          <img
            src={img10}
            alt="Parachute"
            className="absolute top-0 right-4 w-[20%] sm:w-[25%] md:w-[25%]"
          />
          <img
            src={img7}
            alt="Let's Go Mascot"
            className="absolute bottom-0 right-4 w-[20%] sm:w-[25%] md:w-[30%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
