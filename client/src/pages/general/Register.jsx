import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen bg-[#D9D9D9] flex items-center justify-center">
      <div className="max-w-md w-full bg-[#EBCEA8] shadow-md p-8 rounded-lg">
        <h1 className="text-2xl font-bold text-[#181C14] text-center">Register</h1>
        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              type="email"
              className="w-full p-2 border border-orange-300 rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-block-700">Password</label>
            <input 
              type="password"
              className="w-full p-2 border border-orange-300 rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-block-700">Confirm Password</label>
            <input 
              type="password"
              className="w-full p-2 border border-orange-300 rounded mt-1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[#EB9721] py-2 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
