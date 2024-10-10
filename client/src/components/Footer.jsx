import React from 'react';
import logo from '../images/footer/logo.png';
import { FaLocationDot } from "react-icons/fa6";
import family from '../images/footer/family.png';
import question from '../images/footer/question.png';
import { PiPhoneCallFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <div className='w-full flex flex-col bg-[#D9D9D9]'>
      <div className='w-full flex flex-col lg:flex-row gap-5 p-5'>
        {/* Left Section: Logo and Address */}
        <div className='w-full lg:w-1/3 flex flex-col gap-2 p-2'>
          <div className='flex gap-5 mt-5 justify-center lg:justify-start'>
            <FaLocationDot className='text-4xl' style={{ color: '#000000', border: '2px solid #EB9721', borderRadius: '50%', }} />
            <p className='text-[.8rem] font-poppins'>
              Unit 1 - Bajarias' Commercial Space, Cambangyao Dalaguete, near Gerboy's Residence Dalaguete,
              Philippines, 6022
            </p>
          </div>
        </div>

        {/* Middle Section: Useful Links */}
        <div className='w-full lg:w-1/3 flex flex-col justify-center items-center'>
          <h1 className='font-bold'>About E-Learners</h1>
          <div className='flex gap-3 items-center mt-3'>
            <p>Our Team</p>
          </div>
          <div className='flex gap-3 items-center mt-3'>
            <p className='ml-[1vh]'>About Us</p>
          </div>
          <div className='flex gap-3 items-center mt-3'>
            <p className='ml-[1vh]'>FAQ's</p>
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className='w-full lg:w-1/3 flex flex-col gap-3 justify-center pt-10 lg:pt-14 px-5'>
          <h1 className='font-bold text-center lg:text-left'>Contact Us</h1>
          <div className='flex gap-3 justify-center lg:justify-start'>
            <PiPhoneCallFill className='text-4xl' style={{ color: '#000000', border: '2px solid #EB9721', borderRadius: '70%' }} />
            <div className='text-[.9rem] font-normal font-poppins'>
              <p>+63 929 093 5005</p>
              <p>+63 960 670 2035</p>
            </div>
          </div>
          <div className='flex gap-3 text-[.9rem] justify-center lg:justify-start items-center'>
            <BiLogoGmail className='text-4xl' style={{color: '#000000', border: '2px solid #EB9721', borderRadius: '70%' }}/>
            <p className='font-poppins'>learninglanehub07@gmail.com</p>
          </div>
          <div className='flex gap-3 text-[.8rem] justify-center lg:justify-start items-center'>
            <MdOutlineFacebook className='text-4xl' style={{ border: '2px solid #EB9721', borderRadius: '50%' }} />
            <p className='font-poppins'>LearningLane Hub Tutorial Services</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='w-full h-[3rem] bg-[#EB9721] flex justify-center lg:justify-end items-center px-3'>
        <p className='text-center lg:text-right'>
          Copyright©2024 Early Learners Hub. All Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
