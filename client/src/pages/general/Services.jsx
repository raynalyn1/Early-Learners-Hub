import React from "react";
import service from "../../images/img5.jpg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import list from "../../images/list.png";
import lets from "../../images/lets.png";

const Services = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-5 bg-[#EB9721]">
        {/* Hero Section */}
        <div
          className="flex flex-col md:flex-row justify-between items-center md:items-end p-5 md:p-9 mt-0 overflow-hidden relative w-full h-[300px] sm:h-[400px] lg:h-[500px]"
          style={{
            backgroundImage: `url(${service})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-50 h-full"></div>

          
          {/* Links */}
          <div className="w-full sm:w-auto md:w-[30vw] h-auto flex flex-col sm:flex-row gap-4 md:gap-16 justify-center items-center z-10">
            <Link
              to="/about"
              className="underline font-bold text-[1rem] sm:text-[1.2rem] md:text-[1.3rem]"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="underline font-bold text-[1rem] sm:text-[1.2rem] md:text-[1.3rem]"
            >
              Services
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#EBCEA8] w-full h-auto p-5 md:p-9">
          {/* Intro Section */}
          <div className="flex flex-col md:flex-row w-full h-auto md:h-[25vh] p-5 gap-5 md:gap-9">
            <img src={list} alt="list" className="w-full md:w-[15%]" />
            <div className="w-full md:w-[85%] p-5">
              <p className="text-center md:text-left font-semibold">
                Why Choose Us
              </p>
              <h1 className="text-center text-[1.2rem] md:text-[1.5rem] text-[#5B3A29]">
                We offer a unique educational experience tailored to young
                learners
              </h1>
              <p className="text-center mx-auto mt-4 md:w-[80%] lg:w-[60%]">
                At EarlyLearners Hub Tutorial Services, we are dedicated to
                providing an exceptional learning environment that nurtures your
                child's growth and potential. Here’s why you should choose us
              </p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 p-5 gap-2">
            {/* Feature Items */}
            {[
              {
                title: "Personalized Learning Approach",
                text: "We customize our teaching methods to match each child's unique learning style and pace, ensuring they receive the attention and support they need.",
              },
              {
                title: "Interactive and Engaging Sessions",
                text: "Our team consists of experienced and passionate educators who are committed to guiding and inspiring your child through their educational journey.",
              },
              {
                title: "Comprehensive Programs",
                text: "From early reading programs to writing fundamentals, we offer a range of comprehensive courses to build essential skills in young learners.",
              },
              {
                title: "Flexible Tutoring Options",
                text: "Whether you prefer one-on-one sessions or group classes, we offer flexible options to suit your child’s needs and your schedule.",
              },
              {
                title: "Focus on Confidence Building",
                text: "Our supportive environment encourages children to build self-confidence, empowering them to take on new challenges with enthusiasm.",
              },
              {
                title: "Expert Educators",
                text: "Our team consists of experienced and passionate educators who are committed to guiding and inspiring your child through their educational journey.",
              },
              {
                title: "Holistic Development",
                text: "We promote social skills development, problem-solving abilities, and critical thinking, ensuring well-rounded growth for every child.",
              },
              {
                title: "Parental Involvement",
                text: "We believe in collaborating with parents to create a holistic learning experience, ensuring alignment between home and school learning.",
              },
            ].map((feature, index) => (
              <div key={index} className="h-auto">
                <p className="font-bold">{feature.title}</p>
                <div className="bg-[#EDC285] p-5 md:p-9 h-auto mt-5 rounded-lg">
                  <p className="text-center">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}

          {/* Closing Section */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-9 justify-center items-center mt-5">
            <h2 className="text-center text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] w-full md:w-[50vw]">
              Choose EarlyLearners Hub for an engaging, supportive, and
              effective learning journey that empowers your child to succeed!
            </h2>
            <img src={lets} alt="run" className="w-[50%] md:w-[20%]" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
