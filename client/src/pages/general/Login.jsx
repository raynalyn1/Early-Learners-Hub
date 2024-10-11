import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Footer from "../../components/Footer";

const SignIn = () => {
  const navigate = useNavigate(); // Create the navigate function

  return (
    <div className="font-poppins">
      <div className="bg-[#EB9721] w-full px-5 relative">
        <div className="flex justify-center items-center min-h-screen bg-[#e5bb92]">
          <div className="bg-[#F1F1F1] p-10 rounded-lg shadow-lg w-[55%] h-[55vh]">
            <div className="grid grid-cols-2 gap-8 ml-[3%]">
              {/* Left Side: Sign In Form */}
              <div>
                <h2 className="text-3xl font-lg mb-8">Sign In</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      className="w-[80%] p-3 border text-xs"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Password*
                    </label>
                    <input
                      type="password"
                      className="w-[80%] p-3 border text-xs"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex justify-between text-sm p-[5%]">
                    <a href="#" className="text-gray-600 hover:underline p-[2%]">
                      Forgot your password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-[40%] bg-[#f29e38] text-white p-3 rounded-xl hover:bg-orange-600 ml-[7%]"
                  >
                    Sign In
                  </button>
                </form>
              </div>

              {/* Right Side: Sign Up */}
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl text-black-500 mb-2 font-lg">
                  Don't have an account?
                </p>
                <p className="text-sm text-black-500 mb-10 mt-5 ml-[3%]">
                  Sign up for a FREE Early Learners Hub <br />
                  account today and unlock a world of fun, <br />
                  interactive learning for young learners!
                </p>
                <button
                  className="border border-orange-400 text-orange-400 p-3 rounded-xl w-[40%] hover:bg-orange-100"
                  onClick={() => navigate("/register")} // Navigate to Sign Up page
                >
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
