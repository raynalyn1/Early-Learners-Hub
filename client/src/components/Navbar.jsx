import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../images/footer/logo.png"; 
import img1 from "../images/footer/Game Controller.png"; 
import img2 from "../images/footer/videos.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen); 
  };

  const closeMenu = () => {
    setMenuOpen(false); 
  };

  return (


          {/* Centered Games and Videos Links with Icons Inside the Colored Background */}
          <div className="flex items-start space-x-8 w-[100%] px-[10%] ">
            <Link to="/games" className="flex items-center space-x-2 text-black hover:text-gray-700 transition duration-300">
              <span className="flex items-center bg-[#F6A619] text-black px-4 py-2 rounded-lg">
                <img src={img1} alt="Games" className="w-6 h-6 mr-2" />
                Games
              </span>
            </Link>
            <Link to="/videos" className="flex items-center space-x-2 text-black hover:text-gray-700 transition duration-300">
              <span className="flex items-center bg-[#F6A619] text-bla px-4 py-2 rounded-lg">
                <img src={img2} alt="Videos" className="w-6 h-6 mr-2" />
                Videos
              </span>
            </Link>
          </div>

          {/* Sign In and Burger Menu */}
          <div className="flex items-center space-x-4 w-[19vh]">
            {/* Sign In Button */}
            <Link to="/login" className=" text-base px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 transition duration-300 w-[100%] flex items-end">
              SIGN IN
            </Link>

            {/* Burger Menu Icon (Always Visible) */}
            <button onClick={handleMenuClick} className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Modal (Sliding Drawer) */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={closeMenu}
          ></div>

          {/* Side Drawer */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0">
            <button onClick={closeMenu} className="p-4 text-black hover:bg-gray-200 focus:outline-none">
              {/* Close button inside the modal */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="px-6 py-4">
              <Link to="/" onClick={closeMenu} className="block text-black px-4 py-2 hover:bg-gray-100">Home</Link>
              <Link to="/about" onClick={closeMenu} className="block text-black px-4 py-2 hover:bg-gray-100">About Us</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
