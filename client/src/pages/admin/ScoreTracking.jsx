import React, { useState, useEffect } from 'react';
import dropdown from "../../images/Dashboard/dropdownIcon.png";

const ScoreTracking = () => {
  const [students, setStudents] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [gamesLevel, setGamesLevel] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("All");
  const [selectedTournament, setSelectedTournament] = useState("All");
  const [selectedGameLevel, setSelectedGameLevel] = useState("All");
  const [scoreData, setScoreData] = useState([]);


  // getting the name for the login user
  const [username, setUserName] = useState('');

  //getting from the localStorage
  useEffect(() => {
    const name = localStorage.getItem('name');
    console.log(name);
    if(name) {
      setUserName(name);
    }
  }, []);

  //Get the initail of the name 
  const getInitials = (name) => {
    const nameParts = name.split(" "); // Split by space to get first and last name
    const firstNameInitial = nameParts[0]?.charAt(0).toUpperCase(); // First letter of first name
    const lastNameInitial = nameParts[1]?.charAt(0).toUpperCase();  // First letter of last name
    return firstNameInitial + lastNameInitial; // Combine initials
  };

  useEffect(() => {
    // Mock data fetch - Replace with actual API calls if available
    setStudents([
      { id: 1, name: "Marvin Tenobroso" },
      { id: 2, name: "Rovelyn Paradero" },
      // Add more students as needed
    ]);
    setTournaments(["Flash Card Games", "Math Quest Adventure", "Memory Match", "Picture-Word Matching"]);
    setGamesLevel(["Easy", "Medium", "Difficult"]);
    setScoreData([
      {
        studentName: "Marvin Tenobroso",
        tournament: "Flash Card Games",
        gameLevel: "Difficult",
        score: 10,
      },
      {
        studentName: "Rovelyn Paradero",
        tournament: "Math Quest Adventure",
        gameLevel: "Easy",
        score: 50,
      },
      {
        studentName: "Rovelyn Paradero",
        tournament: "Memory Match",
        gameLevel: "Easy",
        score: 50,
      },
      {
        studentName: "Rovelyn Paradero",
        tournament: "Picture-Word Matching",
        gameLevel: "Easy",
        score: 50,
      },
    ]);
  }, []);

  const filteredScores = scoreData.filter((data) => {
    return (
      (selectedStudent === "All" || data.studentName === selectedStudent) &&
      (selectedTournament === "All" || data.tournament === selectedTournament) &&
      (selectedGameLevel === "All" || data.gameLevel === selectedGameLevel)
    );
  });

  const renderStars = (score) => {
    const stars = Math.round(score / 10);
    return (
      <span>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < stars ? "text-yellow-500" : "text-gray-300"}>
            ★
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="p-8 bg-[#FAF3EB] min-h-screen">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="text-gray-500">Wednesday, 06 November 2024</div>
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
          {username ? getInitials(username) : "??"}
          {/* Display initials */}
          </div>
          <span className="ml-2">{username}</span>
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="w-1/3">
          <label className="font-semibold">Student Name</label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option value="All">All</option>
            {students.map((student) => (
              <option key={student.id} value={student.name}>
                {student.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="w-1/3">
          <label className="font-semibold">Tournaments</label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={selectedTournament}
            onChange={(e) => setSelectedTournament(e.target.value)}
          >
            <option value="All">All</option>
            {tournaments.map((tournament, index) => (
              <option key={index} value={tournament}>
                {tournament}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/3">
          <label className="font-semibold">Games Level</label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={selectedGameLevel}
            onChange={(e) => setSelectedGameLevel(e.target.value)}
          >
            <option value="All">All</option>
            {gamesLevel.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className="w-full bg-white border border-gray-200 rounded shadow-sm">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Student Name</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Tournaments</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Games Level</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Score</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Stars Received</th>
          </tr>
        </thead>
        <tbody>
          {filteredScores.length > 0 ? (
            filteredScores.map((data, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{data.studentName}</td>
                <td className="px-4 py-2">{data.tournament}</td>
                <td className="px-4 py-2">{data.gameLevel}</td>
                <td className="px-4 py-2">{data.score}</td>
                <td className="px-4 py-2">{renderStars(data.score)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-4 py-2 text-center text-gray-500">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTracking;
