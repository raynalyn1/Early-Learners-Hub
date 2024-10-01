import React from 'react';
import { Link } from 'react-router-dom';
import img from "../images/footer/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#D9D9D9] w-full top-0 left-0 shadow-md" style={{ boxShadow: '20px 20px 20px rgba(0, 0, 0, 0.100)' }}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Text Section */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img src={img} alt="Logo" className="w-[10vh] h-[10vh]" />
            <span className="ml-2 text-xl font-bold text-black">Early Learners Hub</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-black border-gray-300 px-4 py-2 rounded-md ">
            <span className="underline decoration-4 decoration-gray-300 decoration-4 hover:decoration-orange-300 transition-all duration-300">Home</span>
          </Link>
          <Link to="/about" className="text-black border-gray-300 px-4 py-2 rounded-md ">
            <span className="underline decoration-4 decoration-gray-300 hover:decoration-orange-300 transition-all duration-300">About Us</span>
          </Link>
          
          {/* Login Button */}
          <Link to="/login" className="text-black  border-gray-300 px-4 py-2 rounded-md ">
            <span className="underline decoration-4 decoration-gray-300 hover:decoration-orange-300 transition-all duration-300">Login</span>
          
            
          </Link>

          {/* Register Button */}
          <Link to="/register" className="text-black  border-gray-300 px-4 py-2 rounded-md ">
            <span className="underline decoration-4 decoration-gray-300 hover:decoration-orange-300 transition-all duration-300">Register</span>
     
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            {/* This could be a hamburger icon (using an SVG or FontAwesome) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
