import React from "react";
import Footer from "../../components/Footer";

const SignUp = () => {
  return (
    <div>
      <div className="bg-[#EB9721] w-full px-5 relative">
        <div className="flex justify-center items-center min-h-screen bg-[#f4d7b2]">
          <div className="bg-[#F1F1F1] p-10 rounded-lg shadow-lg w-[55%] h-[55vh] grid grid-cols-2 gap-10 ">
            
            {/* Left Side: Welcome and Info */}
            <div className="">
              <h2 className="text-3xl font-poppins font-semibold mb-4 text-center " >
                Welcome to Early Learners Hub!
              </h2>
              <p className="text-sm font-poppins text-gray-600 mb-4">
                Sign up for a FREE Early Learners Hub account to enjoy:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-6">
                <li>Access to fun and interactive learning</li>
                <li>Personalized learning plans for kids</li>
                
                <li>Exclusive access to educational content</li>
              </ul>
            </div>

            {/* Right Side: Sign Up Form */}
            <div>
              <form className="space-y-4 ml-[10%]">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-poppins font-medium mb-1 ">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="w-[80%] p-3 border rounded-md text-xs"
                    placeholder="Email Address"
                  />
                </div>

                {/* Name Field */}
                <div>
                  <label className="block text-sm font-poppins font-medium mb-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    className="w-[80%] p-3 border rounded-md text-xs"
                    placeholder="Name"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-poppins font-medium mb-1">
                    Password*
                  </label>
                  <input
                    type="password"
                    className="w-[80%] p-3 border rounded-md text-xs"
                    placeholder="Password"
                  />
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-sm font-poppins font-medium mb-1">
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    className="w-[80%] p-3 border rounded-md text-xs"
                    placeholder="Confirm Password"
                  />
                </div>

                {/* Sign Up Button */}
                <div className="flex justify-start mt-[2%] ">
                  <button
                    type="submit"
                    className="bg-[#f29e38] text-white p-3 rounded-2xl hover:bg-orange-600 w-[40%] h-[40%] p-[1rem]"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
