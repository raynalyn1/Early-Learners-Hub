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
    <div className="flex flex-col justify-center items-center px-9">
      {/* Header Section */}
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '400px',
          marginTop: '0',
          marginLeft: '1.5rem'
        }}
        alt="About Us Image"
      >
        <h1
          className="text-[#5B3A29] text-[5rem] font-semibold"
          style={{ textShadow: '6px 5px 4px rgba(0, 0, 0, 0.7)' }}
        >
          About Us
        </h1>
      </div>

      {/* Introduction Section */}
      <div className="bg-[#EBCEA8] w-full h-auto p-9">
        <div className="w-full h-auto flex flex-col md:flex-row gap-6 items-center">
          <h1 className="text-[#5B3A29] poppins text-[1.8rem] md:w-[35%] text-center md:text-left">
            Welcome to Early Learners Hub Tutorial Services,<br />
            where learning meets excellence!
          </h1>

          <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center">
            <div className="flex items-center md:w-[30%]">
              <img src={book} alt="Book" className="w-[40px] h-[40px] ml-5" />
              <p className="text-center text-[#5B3A29] poppins ml-3">
                Kickstart your Child's Literacy Journey with EarlyLearners Hub Tutorial Services!
              </p>
            </div>
            <div className="flex items-center md:w-[30%] mt-5 md:mt-0">
              <img src={paper} alt="Paper" className="w-[50px] h-[50px] mr-3" />
              <p className="text-center text-[#5B3A29] poppins">
                Discover our comprehensive programs designed to develop essential reading and writing skills.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-center py-5">
          {[{ img: many, text: 'Early Reading Programs' }, 
            { img: hand, text: 'Writing Fundamentals' }, 
            { img: symp, text: 'Interactive Learning' }, 
            { img: kid, text: 'Tailored for Young Learners' }, 
            { img: teacher, text: 'Experienced Educators' }, 
            { img: confitte, text: 'Fun and Engaging Activities' }]
            .map((service, index) => (
            <div key={index} className="w-full h-full bg-white rounded-lg flex gap-2 items-center justify-center p-4"
                 style={{ boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src={service.img} alt={service.text} className="border border-[#EB9721] rounded-full p-2" />
              <p>{service.text}</p>
            </div>
          ))}
        </div>

        {/* Images Section */}
        <div className="w-full h-auto flex flex-col md:flex-row p-9 justify-center gap-5">
          <img src={teach} alt="Teach" className="w-full md:w-[40%] h-auto rounded-3xl" style={{ boxShadow: '-9px -9px 8px rgba(255, 255, 255, 0.9)' }} />
          <img src={play} alt="Play" className="w-full md:w-[40%] h-auto rounded-3xl mt-5 md:mt-0" style={{ boxShadow: '-9px -9px 8px rgba(255, 255, 255, 0.9)' }} />
        </div>

        {/* Teachers Section */}
        <div className="w-full h-auto bg-[#EBCEA8]">
          <div className="rounded-b-[50%] bg-[#ECB671] w-full h-[20vh] flex flex-col gap-2 justify-center items-center">
            <h1 className="text-[#5B3A29] text-[2rem] font-bold">Esteemed Teachers</h1>
            <p className="text-center">Experienced and passionate educators who are committed to guiding and inspiring your child through their educational journey.</p>
          </div>
          <div className="flex flex-wrap gap-5 justify-center p-5">
            {Array(4).fill(0).map((_, index) => (
              <Card key={index} imgSrc={teachi} title="Ms. Emille Panganiban" description="Teacher in the class" />
            ))}
          </div>
        </div>

        {/* Services Offered Section */}
        <div className="w-full h-auto p-9 flex flex-col md:flex-row gap-9">
          <div className="w-full md:w-[70%] h-auto flex flex-col gap-5">
            <h1 className="text-[1.5rem] font-bold text-center text-[#5B3A29]">Services Offered</h1>
            <div className="w-full flex flex-col md:flex-row gap-9">
              <div className="w-full md:w-[50%] h-[40vh] bg-[#EDC285] rounded-lg p-5"
                   style={{ boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h1 className="font-bold">Flexible Tutoring Options</h1>
                <p className="text-center mt-[10vh]">
                  Whether you prefer <span className="font-bold">one-on-one</span> sessions or <span className="font-bold">group</span> classes, we offer flexible options to suit your child’s needs and your schedule.
                </p>
              </div>
              <div className="w-full md:w-[50%] h-[40vh] bg-[#EDC285] rounded-lg p-5"
                   style={{ boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h1 className="font-bold">Parental Involvement</h1>
                <p className="text-center mt-[10vh]">
                  We believe in collaborating with parents to create a holistic learning experience, ensuring alignment between home and school learning.
                </p>
              </div>
            </div>
            <Buttons styleType="primary1" label="Learn More!" onClick={handleLearnMoreClick} />
          </div>
          <img src={teaching} alt="Teaching" className="w-full md:w-[30%] h-auto rounded-lg" />
        </div>
      </div>

      
    </div>
    <Footer />
    </div>
  );
};

export default AboutUs;
