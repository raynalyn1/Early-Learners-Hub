import React, { useState, useEffect } from 'react';
import dropdownIcon from "../../images/Dashboard/dropdownIcon.png";

const User = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsData = [
        { id: 1, name: "Paradero, Rovelyn", parent: "Paradero, Rodrigo", contact: "0965012336" },
        { id: 2, name: "Dela Cruz, Juan", parent: "Dela Cruz, Maria", contact: "09123456789" },
      ];
      setStudents(studentsData);
    };
    
    fetchStudents();
  }, []);

  const handleViewUserList = () => {
    if (selectedStudent) {
      const filteredData = students.filter(student => student.name === selectedStudent);
      setUserData(filteredData);
    } else {
      setUserData(students);
    }
  };

  return (
    <div className="p-8 bg-[#FAF3EB] h-[95vh] overflow-auto">
      <h1 className="text-3xl font-bold text-[#F47C21] mb-6">List of User</h1>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <select
            className="w-64 p-3 border border-gray-300 rounded bg-[#FBF7F0] focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none pr-8 text-gray-700"
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option value="">Select User</option>
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
          className="px-6 py-2 bg-[#F47C21] text-white rounded hover:bg-[#E06A1B] transition-colors"
          onClick={handleViewUserList}
        >
          View User List
        </button>
      </div>
      
      <table className="w-[80%] bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden mx-auto">

        <thead>
          <tr className="bg-[#FBF7F0]">
            <th className="border border-[#E5E5E5] px-4 py-3 text-center text-[#333333] font-semibold " rowSpan="2">Students Name</th>
            <th className="border border-[#E5E5E5] px-4 py-3 text-center text-[#333333] font-semibold" colSpan="2">Parents Information</th>
          </tr>
          <tr className="bg-[#FBF7F0]">
            <th className="border border-[#E5E5E5] px-4 py-3 text-left text-[#333333] font-semibold">Name</th>
            <th className="border border-[#E5E5E5] px-4 py-3 text-left text-[#333333] font-semibold">Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id} className="bg-[#FBF7F0]">
              <td className="border border-[#E5E5E5] px-4 py-3 text-gray-700">{user.name}</td>
              <td className="border border-[#E5E5E5] px-4 py-3 text-gray-700">{user.parent}</td>
              <td className="border border-[#E5E5E5] px-4 py-3 text-gray-700">{user.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
