import React, { useState, useEffect } from 'react';
import dropdownIcon from "../../images/Dashboard/dropdownIcon.png";

const User = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Mock data fetch - Replace with actual API call if available
    const fetchStudents = async () => {
      const studentsData = [
        { id: 1, name: "Paradero, Rovelyn", parent: "Paradero, Rodrigo", contact: "0965012336" },
        { id: 2, name: "Dela Cruz, Juan", parent: "Dela Cruz, Maria", contact: "09123456789" },
        // Add more data as needed
      ];
      setStudents(studentsData);
    };
    
    fetchStudents();
  }, []);

  const handleViewUserList = () => {
    // Filter user data based on selected student
    if (selectedStudent) {
      const filteredData = students.filter(student => student.name === selectedStudent);
      setUserData(filteredData);
    } else {
      setUserData(students); // Show all users if no specific student is selected
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-500 mb-4 ">List of User</h1>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <select
            className="w-60 p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none pr-8"
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option value="">Select Student Name</option>
            {students.map((student) => (
              <option key={student.id} value={student.name}>
                {student.name}
              </option>
            ))}
          </select>
          <img
            src={dropdownIcon}
            alt="Dropdown Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400"
          onClick={handleViewUserList}
        >
          View User List
        </button>
      </div>
      
      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Students Name</th>
            <th colSpan="2" className="border border-gray-300 px-4 py-2 text-center">Parents Information</th>
          </tr>
          <tr>
            <th></th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Contact No.</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.parent}</td>
              <td className="border border-gray-300 px-4 py-2">{user.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
