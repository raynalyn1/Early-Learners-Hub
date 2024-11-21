import React, { useState, useEffect } from 'react';
import dropdownIcon from "../../images/Dashboard/dropdownIcon.png";

const User = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsData = [
        { id: 1, name: "Paradero, Rovelyn", parent: "Paradero, Rodrigo", contact: "rodrigo.paradero@gmail.com" },
        { id: 2, name: "Dela Cruz, Juan", parent: "Dela Cruz, Maria", contact: "maria.delacruz@gmail.com" },
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
      {/* Header */}
      {/* <div className="flex justify-between items-center bg-white shadow-lg p-4 mb-6">
       
        <div className="flex items-center gap-4">
          <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">MR</div>
          <span className="text-gray-700 font-semibold">Mizar Reim</span>
          <img src={dropdownIcon} alt="Dropdown Icon" className="w-4 h-4" />
        </div>
      </div> */}

      <h1 className="text-3xl font-bold text-[#F47C21] mb-10">List of User</h1>

      {/* Search Box */}
      <div className="flex justify-end mb-10 mr-[10rem]">
        <div className="relative w-[20%] h-[]">
          <input
            type="text"
            placeholder="Search"
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
      <table className="w-[60%] bg-white border border-gray-300 shadow-md mx-auto mt-[5rem]">
        <thead>
          <tr className="bg-[#FBF7F0]">
            <th className="border border-[#E5E5E5] px-4 py-3 text-center text-[#333333] font-semibold">User</th>
            <th className="border border-[#E5E5E5] px-4 py-3 text-center text-[#333333] font-semibold">Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id} className="bg-[#FBF7F0]">
              <td className="border border-[#E5E5E5] px-4 py-3 text-gray-700">{user.name}</td>
              <td className="border border-[#E5E5E5] px-4 py-3 text-gray-700">{user.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
