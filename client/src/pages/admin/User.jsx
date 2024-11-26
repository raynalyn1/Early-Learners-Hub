import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importing Axios
import dropdownIcon from "../../images/Dashboard/dropdownIcon.png";

const User = () => {
  const [students, setStudents] = useState([]); // Stores the list of students fetched from the API
  const [searchQuery, setSearchQuery] = useState(""); // Stores the search query entered by the user
  const [userData, setUserData] = useState([]); // Stores the filtered user data to be displayed

  // Fetch students from the API when the component mounts
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // Replace this with your actual API URL
        const response = await axios.get('http://localhost:3000/auth/users');
        setStudents(response.data); // Set the fetched data to the students state
        setUserData(response.data); // Initially, display all users
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []); // Empty dependency array means this will run only once when the component mounts

  // Function to filter the user data based on the search query
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter students based on the name or email
    const filteredData = students.filter((student) => {
      return (
        student.name.toLowerCase().includes(query) || 
        student.email.toLowerCase().includes(query)
      );
    });
    setUserData(filteredData); // Set filtered data to be displayed in the table
  };

  return (
    <div className="p-8 bg-[#FAF3EB] h-[93vh] overflow-auto">
      <h1 className="text-3xl font-bold text-[#F47C21] mb-8">List of Users</h1>

      {/* Search Box */}
      <div className="flex justify-end mb-6">
        <div className="relative w-[25%]">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchQuery}
            onChange={handleSearch} // Update the search query as user types
            className="w-full p-3 border border-gray-300 rounded bg-[#FBF7F0] focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700"
          />
          <img
            src={dropdownIcon}
            alt="Dropdown Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto"  style={{ height: '60vh' }}>
        <table className="w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-[#EB9721] sticky top-0 z-10">
            <tr>
              <th className="border border-[#E5E5E5] px-6 py-3 text-center text-[#333333] font-semibold text-lg">User</th>
              <th className="border border-[#E5E5E5] px-6 py-3 text-center text-[#333333] font-semibold text-lg">Email</th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              userData.map((user) => (
                <tr key={user.id} className="bg-[#FBF7F0] hover:bg-[#F9E1B8] cursor-pointer">
                  <td className="border border-[#E5E5E5] px-6 py-4 text-gray-700 text-left">{user.name}</td>
                  <td className="border border-[#E5E5E5] px-6 py-4 text-gray-700 text-left">{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center py-4 text-gray-700">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
