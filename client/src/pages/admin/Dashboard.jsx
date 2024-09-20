import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
          <p className="text-2xl font-bold text-gray-600">1,234</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Active Sessions</h2>
          <p className="text-2xl font-bold text-gray-600">456</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">New Signups</h2>
          <p className="text-2xl font-bold text-gray-600">78</p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
        <ul className="mt-4 space-y-4">
          <li className="border-b border-gray-200 pb-2">
            <p className="text-gray-700">User John Doe registered.</p>
            <p className="text-gray-500 text-sm">2 hours ago</p>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <p className="text-gray-700">Video "Fun Learning" uploaded.</p>
            <p className="text-gray-500 text-sm">5 hours ago</p>
          </li>
          <li>
            <p className="text-gray-700">Game "Math Quiz" updated.</p>
            <p className="text-gray-500 text-sm">1 day ago</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
