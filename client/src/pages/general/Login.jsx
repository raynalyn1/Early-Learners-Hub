import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-[#EB9721] opacity-80 flex items-center justify-center">
      <div className="max-w-md w-full bg-[#EDC080] shadow-md p-8 rounded-lg">
        <h1 className="text-2xl font-bold text-[#181C14] text-center">Login</h1>
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <input 
              type="email"
              className="w-full p-2 border border-orange-500 opacity-80 rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Username'
              required
            />
          </div>
          <div>
            <input 
              type="password"
              className="w-full p-2 border border-orange-500 opacity-80 rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[#EB9721] text-black py-2 rounded block font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
