import React from 'react';

const Games = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Games</h1>
      <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">Manage Games</h2>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
          Add New Game
        </button>
        <table className="mt-6 w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Game Name</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Category</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-200 px-4 py-2">Math Quiz</td>
              <td className="border-b border-gray-200 px-4 py-2">Education</td>
              <td className="border-b border-gray-200 px-4 py-2">
                <button className="text-blue-600 hover:underline">Edit</button> | 
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 px-4 py-2">Alphabet Game</td>
              <td className="border-b border-gray-200 px-4 py-2">Alphabet</td>
              <td className="border-b border-gray-200 px-4 py-2">
                <button className="text-blue-600 hover:underline">Edit</button> | 
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Games;
