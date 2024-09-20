import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <ul className="space-y-4">
          <li>
            <Link 
              to="/admin/dashboard" 
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/games" 
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Games
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/videos" 
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Videos
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
