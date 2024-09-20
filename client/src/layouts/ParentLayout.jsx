import React from 'react';
import { Link } from 'react-router-dom';

const ParentLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Parent Navbar */}
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <div className="font-bold">Parent Portal</div>
          <div className="space-x-4">
            <Link to="/parent/dashboard" className="hover:text-gray-300">Dashboard</Link>
            <Link to="/parent/feedback" className="hover:text-gray-300">Feedback</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default ParentLayout;
