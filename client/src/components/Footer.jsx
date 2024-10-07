import React from 'react';
import logo from '../images/footer/logo.png';
import location from '../images/footer/location.png';
import family from '../images/footer/family.png';
import question from '../images/footer/question.png';
import phone from '../images/footer/phone.png';
import email from '../images/footer/email.png';
import fb from '../images/footer/fb.png';

const Footer = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex flex-col lg:flex-row gap-5 p-5'>
        {/* Left Section: Logo and Address */}
        <div className='w-full lg:w-1/3 flex flex-col gap-2 p-2'>
  
          <p className='text-center lg:text-left'>
           
          </p>
          <div className='flex gap-5 mt-5 justify-center lg:justify-start'>
            <img src={location} alt='Location' className='h-[8vh] lg:h-[10vh] border border-[#EB9721] rounded-full' />
            <p className='text-[.8rem]'>
              Unit 1 - Bajarias' Commercial Space, Cambangyao Dalaguete, near Gerboy's Residence Dalaguete,
              Philippines, 6022
            </p>
          </div>
        </div>

        {/* Middle Section: Useful Links */}
        <div className='w-full lg:w-1/3 flex flex-col justify-center items-center'>
          <h1 className='font-bold'>Useful Links</h1>
          <div className='flex gap-3 items-center mt-3'>
            <img src={family} alt='Team' className='h-[6vh] border border-[#EB9721] rounded-full' />
            <p>Our Team</p>
          </div>
          <div className='flex gap-3 items-center mt-3'>
            <img src={question} alt='FAQ' className='h-[7vh] border border-[#EB9721] rounded-full ml-[-3vh]' />
            <p className='ml-[2vh]'>FAQ's</p>
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className='w-full lg:w-1/3 flex flex-col gap-3 justify-center pt-10 lg:pt-14 px-5'>
          <h1 className='font-bold text-center lg:text-left'>Contact Us</h1>
          <div className='flex gap-3 justify-center lg:justify-start'>
            <img src={phone} alt='Phone' className='border border-[#EB9721] rounded-full p-1' />
            <div className='text-[.8rem]'>
              <p>+63 929 093 5005</p>
              <p>+63 960 670 2035</p>
            </div>
          </div>
          <div className='flex gap-3 text-[.8rem] justify-center lg:justify-start items-center'>
            <img src={email} alt='Email' className='border border-[#EB9721] rounded-full p-1' />
            <p>learninglanehub07@gmail.com</p>
          </div>
          <div className='flex gap-3 text-[.8rem] justify-center lg:justify-start items-center'>
            <img src={fb} alt='Facebook' className='border border-[#EB9721] rounded-full p-1' />
            <p>LearningLane Hub Tutorial Services</p>
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
