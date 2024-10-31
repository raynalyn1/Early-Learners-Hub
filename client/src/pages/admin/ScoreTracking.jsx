import React, { useState, useEffect } from 'react';
import dropdown from "../../images/Dashboard/dropdownIcon.png";

const ScoreTracking = () => {
  const [students, setStudents] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [gamesLevel, setGamesLevel] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("All");
  const [selectedTournament, setSelectedTournament] = useState("");
  const [selectedGameLevel, setSelectedGameLevel] = useState("");
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    // Mock data fetch - Replace with actual API calls if available
    setStudents([
      { id: 1, name: "Marvin Tenobroso" },
      { id: 2, name: "Juan Dela Cruz" },
      // Add more students as needed
    ]);
    setTournaments(["Flash Card Games", "Math Quiz", "Spelling Bee"]);
    setGamesLevel(["Easy", "Medium", "Difficult"]);
    setScoreData([
      {
        studentName: "Marvin Tenobroso",
        tournament: "Flash Card Games",
        gameLevel: "Difficult",
        score: 50,
      },
      // Add more score records as needed
    ]);
  }, []);

  const filteredScores = scoreData.filter((data) => {
    return (
      (selectedStudent === "All" || data.studentName === selectedStudent) &&
      (selectedTournament === "" || data.tournament === selectedTournament) &&
      (selectedGameLevel === "" || data.gameLevel === selectedGameLevel)
    );
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="mb-4 text-3xl font-bold text-orange-500">Score Tracking</h1>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <select
            className="w-48 p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none pr-8"
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
          <img
            src={dropdown}
            alt="Dropdown Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
        
        <div className="relative">
          <select
            className="w-48 p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none pr-8"
            value={selectedTournament}
            onChange={(e) => setSelectedTournament(e.target.value)}
          >
            <option value="">Select Tournament</option>
            {tournaments.map((tournament, index) => (
              <option key={index} value={tournament}>
                {tournament}
              </option>
            ))}
          </select>
          <img
            src={dropdown}
            alt="Dropdown Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>

        <div className="relative">
          <select
            className="w-48 p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none pr-8"
            value={selectedGameLevel}
            onChange={(e) => setSelectedGameLevel(e.target.value)}
          >
            <option value="">Select Game Level</option>
            {gamesLevel.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>
          <img
            src={dropdown}
            alt="Dropdown Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
      </div>

      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border-b border-gray-300 px-4 py-2 text-left">Student Name</th>
            <th className="border-b border-gray-300 px-4 py-2 text-left">Tournaments</th>
            <th className="border-b border-gray-300 px-4 py-2 text-left">Games Level</th>
            <th className="border-b border-gray-300 px-4 py-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredScores.length > 0 ? (
            filteredScores.map((data, index) => (
              <tr key={index}>
                <td className="border-b border-gray-200 px-4 py-2">{data.studentName}</td>
                <td className="border-b border-gray-200 px-4 py-2">{data.tournament}</td>
                <td className="border-b border-gray-200 px-4 py-2">{data.gameLevel}</td>
                <td className="border-b border-gray-200 px-4 py-2">Score: {data.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="border-b border-gray-200 px-4 py-2 text-center">
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
