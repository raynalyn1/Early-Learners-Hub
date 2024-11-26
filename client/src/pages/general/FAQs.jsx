import React, { useState, useRef, useEffect } from 'react';
import './FAQs.css'; // If you need custom styles

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [isInView, setIsInView] = useState(false);

  // Refs for each question-answer div
  const faqRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  // Intersection Observer to detect when an FAQ enters the viewport
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, options);

    // Observe each FAQ item
    faqRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleQuestionClick = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index); // Toggle the active question
  };

  return (
    <div className="max-w-lg mx-auto bg-blue-100 p-6 rounded-lg shadow-xl space-y-6">
      <h2 className="text-center text-3xl text-orange-600 font-semibold mb-6">FAQ's for Kids</h2>
      
      <div className="space-y-6">
        {/* Question 1 */}
        <div ref={faqRefs[0]} className="faq-item transition-transform transform opacity-0">
          <button
            className="w-full p-4 bg-yellow-400 text-white font-semibold rounded-lg transition transform hover:scale-105"
            onClick={() => handleQuestionClick(0)}
          >
            What is React?
          </button>
          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg text-gray-700 transition-all duration-500 ease-in-out ${activeQuestion === 0 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
          >
            React is a JavaScript library used to build interactive user interfaces!
          </div>
        </div>

        {/* Question 2 */}
        <div ref={faqRefs[1]} className="faq-item transition-transform transform opacity-0">
          <button
            className="w-full p-4 bg-yellow-400 text-white font-semibold rounded-lg transition transform hover:scale-105"
            onClick={() => handleQuestionClick(1)}
          >
            What is a Component?
          </button>
          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg text-gray-700 transition-all duration-500 ease-in-out ${activeQuestion === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
          >
            A component is a building block of React. It is like a puzzle piece that can be reused to create UI elements.
          </div>
        </div>

        {/* Question 3 */}
        <div ref={faqRefs[2]} className="faq-item transition-transform transform opacity-0">
          <button
            className="w-full p-4 bg-yellow-400 text-white font-semibold rounded-lg transition transform hover:scale-105"
            onClick={() => handleQuestionClick(2)}
          >
            How do I use React?
          </button>
          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg text-gray-700 transition-all duration-500 ease-in-out ${activeQuestion === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
          >
            You use React by creating components and combining them to build websites or apps.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
