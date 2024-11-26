import React, { useState } from "react";
import wonder from "../../images/FAQ/wonder.png";
import question from "../../images/FAQ/question.png";
import Footer from "../../components/Footer";

function FAQ() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div>
      <div className="flex flex-col items-center  bg-[#EB9721]  px-5 sm:px-5">
        <div className="bg-[#EBCEA8] w-full">
          <div className="flex justify-between items-center px-8 py-6">
            <img src={wonder} alt="Wonder Icon" className="w-24 h-24" />
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[#FF7F50]">FAQ's</h1>
              <p className="text-lg text-[#6C757D]">
                Frequently Asked Questions
              </p>
            </div>
            <img src={question} alt="Question Icon" className="w-24 h-24" />
          </div>

          {/* FAQ Section */}
          <div className="px-8 py-4 space-y-6">
            {/* General Overview */}
            <div
              className="bg-[#F9F3E5] p-6 rounded-lg shadow-md max-w-[800px] mx-auto cursor-pointer"
              onClick={() => toggleSection("generalOverview")}
            >
              <h2 className="text-xl font-semibold text-[#FF7F50]">
                General Overview
              </h2>
              {activeSection === "generalOverview" && (
                <ul className="mt-4 space-y-2 text-[#6C757D]">
                  <li>What is EarlyLearners Hub?</li>
                  <li>
                    Why is EarlyLearners Hub important for early childhood
                    education?
                  </li>
                </ul>
              )}
            </div>

            {/* For Students */}
            <div
              className="bg-[#F9F3E5] p-6 rounded-lg shadow-md max-w-[800px] mx-auto cursor-pointer"
              onClick={() => toggleSection("forStudents")}
            >
              <h2 className="text-xl font-semibold text-[#FF7F50]">
                For Students
              </h2>
              {activeSection === "forStudents" && (
                <ul className="mt-4 space-y-2 text-[#6C757D]">
                  <li>How does EarlyLearners Hub help young learners?</li>
                  <li>What skills does EarlyLearners Hub focus on?</li>
                  <li>
                    How does EarlyLearners Hub sustain children’s attention?
                  </li>
                  <li>Is EarlyLearners Hub easy for young children to use?</li>
                </ul>
              )}
            </div>

            {/* For Teachers/Administrators */}
            <div
              className="bg-[#F9F3E5] p-6 rounded-lg shadow-md max-w-[800px] mx-auto cursor-pointer"
              onClick={() => toggleSection("forTeachers")}
            >
              <h2 className="text-xl font-semibold text-[#FF7F50]">
                For Teachers/Administrators
              </h2>
              {activeSection === "forTeachers" && (
                <ul className="mt-4 space-y-2 text-[#6C757D]">
                  <li>How does the platform track student progress?</li>
                  <li>Can teachers customize content on the platform?</li>
                  <li>
                    How does EarlyLearners Hub benefit teachers/administrators?
                  </li>
                </ul>
              )}
            </div>

            {/* Platform Features */}
            <div
              className="bg-[#F9F3E5] p-6 rounded-lg shadow-md max-w-[800px] mx-auto cursor-pointer"
              onClick={() => toggleSection("platformFeatures")}
            >
              <h2 className="text-xl font-semibold text-[#FF7F50]">
                Platform Features
              </h2>
              {activeSection === "platformFeatures" && (
                <ul className="mt-4 space-y-2 text-[#6C757D]">
                  <li>
                    What makes EarlyLearners Hub different from traditional
                    teaching methods?
                  </li>
                </ul>
              )}
            </div>

            {/* Getting Started */}
            <div
              className="bg-[#F9F3E5] p-6 rounded-lg shadow-md max-w-[800px] mx-auto cursor-pointer"
              onClick={() => toggleSection("gettingStarted")}
            >
              <h2 className="text-xl font-semibold text-[#FF7F50]">
                Getting Started
              </h2>
              {activeSection === "gettingStarted" && (
                <ul className="mt-4 space-y-2 text-[#6C757D]">
                  <li>How can I get started with EarlyLearners Hub?</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
