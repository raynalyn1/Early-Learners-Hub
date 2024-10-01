import React from 'react';
import about from '../../images/about.png';
import book from '../../images/book-about.png';
import paper from '../../images/paper-about.png';
import many from '../../images/many-book.png';
import hand from '../../images/hand.png';
import symp from '../../images/symbol.png';
import kid from '../../images/kid.png';
import teacher from '../../images/teacher.png';
import confitte from '../../images/confitte.png';
import Footer from '../../components/Footer';
import teaching from '../../images/teaching.png';
import Buttons from '../../components/Buttons';
import teach from '../../images/teach.png';
import play from '../../images/play.png';
import Card from '../../components/Card';
import teachi from '../../images/teacher/teach.png';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/services');
  };

  return (
    <div>
    <div className="flex flex-col justify-center items-center px-9 bg-[#EB9721]">
      {/* Header Section */}
      <div
        className="flex justify-center items-center relative w-full h-[400px] mt-0 overflow-hidden"
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <h1          className="text-[#181C14] text-[5rem] font-semibold opacity-40 relative z-10"
          style={{ textShadow: '2px 2px 0 rgba(235, 151, 33, 0.3), -2px -2px 0 rgba(235, 151, 33, 0.3), 2px -2px 0 rgba(235, 151, 33, 0.3), -2px 2px 0 rgba(235, 151, 33, 0.3)' }}
        >
          About Us
        </h1>
      </div>

     {/* Introduction Section */}
     <div className="bg-[#EBCEA8] w-full h-auto p-9">
        <div className="w-full h-auto flex flex-col gap-14">
          <div className="flex justify-center w-full">
            <div className="max-w-full md:max-w-7xl">
              <h1 className="text-black poppins text-[28px] font-semi-bold text-left">
                Welcome to EarlyLearners Hub Tutorial Services, where learning meets excellence!
              </h1>
            </div>
          </div>

          {/* Services Section */}
       
            <div className="w-full h-auto flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 max-w-[1400px]">
                {[{ img: many, text: 'Early Reading Programs' }, 
                  { img: hand, text: 'Writing Fundamentals' }, 
                  { img: symp, text: 'Interactive Learning' }, 
                  { img: kid, text: 'Tailored for Young Learners' }, 
                  { img: teacher, text: 'Experienced Educators' }, 
                  { img: confitte, text: 'Fun and Engaging Activities' }]
                  .map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-white bg-opacity-60 rounded-2xl flex items-center gap-4 p-4 transition-transform duration-300 transform hover:scale-125" // Changed to 60% opacity
                    style={{
                      width: '100%',
                      height: '80px',
                      border: '2px solid #EB9721',
                      // boxShadow: '4px 4px 0 rgba(235, 151, 33, 0.3)'
                    }}
                  >
                    
                    <div className="bg-white rounded-full p-2 flex items-center justify-center" style={{ width: '50px', height: '50px' }}>
                      <img src={service.img} alt={service.text} className="w-6 h-6" />
                    </div>
                    <p className="text-[#5B3A29] text-sm font-bold">{service.text}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>

    
        {/* Images Section */}
        <div className="w-full px-8 py-12 bg-[#EBCEA8]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="w-full md:w-[45%] relative">
              <img 
                src={teach} 
                alt="Teacher with child" 
                className="w-full h-auto rounded-3xl object-cover"
                style={{ 
                  boxShadow: '8px 8px 0 rgba(255, 255, 255, 0.9)',
                  aspectRatio: '16 / 9'
                }} 
              />
              <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: 'inset -8px -8px 0 rgba(255, 255, 255, 0.9)' }}></div>
            </div>
            <div className="w-full md:w-[45%] relative mt-12 md:mt-24">
              <img 
                src={play} 
                alt="Child playing with educational toys" 
                className="w-full h-auto rounded-3xl object-cover"
                style={{ 
                  boxShadow: '8px 8px 0 rgba(255, 255, 255, 0.9)',
                  aspectRatio: '16 / 9'
                }} 
              />
              <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: 'inset -8px -8px 0 rgba(255, 255, 255, 0.9)' }}></div>
            </div>
          </div>
        </div>

        {/* Trusted Teachers Section */}
        <div className="w-full bg-[#EBCEA8] py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Trusted Teachers</h2>
            <p className="text-2xl mb-8 max-w-6xl mx-auto text-center">
              Experienced and passionate educators who are committed to guiding and inspiring your child through their educational journey.
            </p>
            
            <div className="w-full overflow-x-auto">
              <div className="flex justify-start gap-6 min-w-max px-4">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-4 rounded-lg transition-transform duration-300 transform hover:scale-95" // Added transition and scale effect
                    style={{ border: '2px solid #EB9721' }}
                  >
                    <div className="w-32 h-38 rounded-full overflow-hidden border-4 border-white mb-6">
                      <img 
                        src={teachi} 
                        alt="Teacher" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-sm">Ms. Reim Mizar</h3>
                    <p className="text-xs">English Teacher</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Background design elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            {/* Add your background design elements here */}
          </div>
        </div>

        {/* Services Offered Section */}
        <div className="w-full h-auto p-8 flex flex-col md:flex-row gap-2 ">
          <div className="w-full md:w-[100%] h-auto flex flex-col gap-16">
            <h1 className="text-4xl font-bold mb-6 text-center text-[#181C14]">Services Offered</h1>
            <div className="w-full flex flex-col md:flex-row gap-16 pl-[10vh]">
              <div 
                className="w-full md:w-[40%] h-[35vh] bg-white bg-opacity-60 rounded-lg p-12 transition-transform duration-300 transform hover:scale-125" // Background opacity set to 80%
                style={{ 
                  border: '2px solid #EB9721'
                }}
              >
                <h1 className="font-bold" style={{ fontSize: '22px'}}>Flexible Tutoring Options</h1>
                <p className="text-left mt-[4vh]" style={{ fontSize: '22px'}}>
                  Whether you prefer <span className="font-bold">one-on-one</span> sessions or <span className="font-bold">group</span> classes, we offer flexible options to suit your child’s needs and your schedule.
                </p>
              </div>
              <div 
                className="w-full md:w-[40%] h-[35vh] bg-white bg-opacity-60 rounded-lg p-5 transition-transform duration-300 transform hover:scale-125" // Background opacity set to 80%
                style={{ 
                  border: '2px solid #EB9721'
                }}
              >
                <h1 className="font-bold" style={{ fontSize: '22px' }}>Parental Involvement</h1>
                <p className="text-left mt-[4vh]" style={{ fontSize: '22px' }}>
                  We believe in collaborating with parents to create a holistic learning experience, ensuring alignment between home and school learning.
                </p>
              </div>
            </div>
            <Buttons 
              styleType="primary1" 
              label="Learn More!" 
              onClick={handleLearnMoreClick} 
              className="h-[928px] w-[388px] "
            />
          </div>
          <img src={teaching} alt="Teaching" className="w-[700px] h-[530px] " />
        </div>
      </div>

      
    </div>
    <Footer />
    </div>
  );
};

export default AboutUs;
