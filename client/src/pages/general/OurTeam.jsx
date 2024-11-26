import React from "react";
import team from "../../images/OurTeam/team.png";
import Footer from "../../components/Footer";


function OurTeam() {
    return (
        <div>
      <div className="flex flex-col items-center  bg-[#EB9721] w-full px-5 sm:px-5 ">
        {/* Header Section */}
        <div className="w-full ">
          <img
            src={team}
            alt="Team Header"
            className="w-full object-cover h-[40vh]" style={{}}
          />
        </div>
  
        {/* Team Description */}
        <div className="bg-[#EBCEA8] w-full py-12 px-6 text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
            We are a collaborative team committed to creating a user-focused
            system through teamwork and innovation.
          </h2>

          <div className="relative flex justify-center gap-0">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-xl p-6 w-64 transform hover:scale-105 transition-all duration-200"
              style={{
                marginTop: `${index * 20}px`, // Stagger effect
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Profile Image */}
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#f9e4d4]">
                <img
                  src={team}
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name and Location */}
              <h3 className="text-lg font-bold text-gray-800 text-center">
                Raynalyn Salonoy
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Dalaguete, 6000
              </p>
              {/* Role Button */}
              <div className="mt-4 flex justify-center">
                <span className="block bg-orange-400 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-md">
                  Project Manager
                </span>
              </div>
            </div>
          ))}
      </div>
        </div>
  
        {/* Team Cards Section */}
       
  
        {/* Footer Section */}
        
      </div>
      <div className="w-full">
          <Footer />
        </div>
      </div>
    );
  }
  
  export default OurTeam;