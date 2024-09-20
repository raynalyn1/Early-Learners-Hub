import React from 'react';

const ParentDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Parent Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Child’s Progress</h2>
          <p>Track your child’s learning activities and milestones achieved in games and educational videos.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <p>Check out upcoming events, webinars, and parent-teacher meetings scheduled for your child.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Messages from Teachers</h2>
          <p>Receive and respond to messages from teachers regarding your child’s performance and activities.</p>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
