import React, { useState, useEffect } from 'react';
import dropdown from "../../images/Dashboard/dropdownIcon.png";

const ScoreTracking = () => {
  const [students, setStudents] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [gamesLevel, setGamesLevel] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("All");
  const [selectedTournament, setSelectedTournament] = useState("All");
  const [selectedGameLevel, setSelectedGameLevel] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [scoreData, setScoreData] = useState([]);
  const [username, setUserName] = useState("");

  // Fetch data from API
  useEffect(() => {
    const fetchScoreData = async () => {
      try {
        const response = await fetch("http://localhost:3000/games"); // Replace with your API endpoint
        const data = await response.json();

        const uniqueTournaments = [...new Set(data.map((item) => item.gameName))];
        const uniqueStudents = [...new Set(data.map((item) => item.playerName))];

        setScoreData(data);
        setTournaments(uniqueTournaments);
        setStudents(uniqueStudents.map((name, id) => ({ id, name })));
        setGamesLevel(["Easy", "Normal", "Hard"]); // Replace with actual levels if available
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };

    fetchScoreData();
  }, []);

  // Fetch username
  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) setUserName(name);
  }, []);

  // Helper to format date input for filtering
  const formatDate = (date) => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  // Filter scores based on selected criteria
  const filteredScores = scoreData.filter((data) => {
    const dateMatch = selectedDate ? formatDate(data.date) === selectedDate : true;
    const studentMatch = selectedStudent === "All" || data.playerName === selectedStudent;
    const tournamentMatch = selectedTournament === "All" || data.gameName === selectedTournament;
    const levelMatch = selectedGameLevel === "All" || data.difficulty === selectedGameLevel;

    return dateMatch && studentMatch && tournamentMatch && levelMatch;
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
    <div className="p-8 bg-[#FAF3EB] h-[95vh] overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center bg-white shadow-lg p-4 mb-6 rounded-lg">
        <div>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">Wednesday, 06 November 2024</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
            {username ? username.slice(0, 2).toUpperCase() : "??"}
          </div>
          <span className="text-gray-700 font-semibold">{username}</span>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-[#F47C21] mb-6">Score Tracking</h2>

      {/* Filters */}
      <div className="grid grid-cols-4 gap-4 mb-6 flex justify-center">
        {/* Student Filter */}
        <div>
          <label className="block font-semibold mb-2">Student Name</label>
          <select
            className="w-1/2 p-2 border border-gray-300 rounded"
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

        {/* Date Filter */}
        <div>
          <label className="block font-semibold mb-2">Date</label>
          <input
            type="date"
            className="w-1/2 p-2 border border-gray-300 rounded"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Game Filter */}
        <div>
          <label className="block font-semibold mb-2">Games</label>
          <select
            className="w-1/2 p-2 border border-gray-300 rounded"
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

        {/* Game Level Filter */}
        <div>
          <label className="block font-semibold mb-2">Games Level</label>
          <select
            className="w-1/2 p-2 border border-gray-300 rounded"
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

      {/* Table */}
      <table className="w-full bg-[] border-collapse border border-[#EADFD2] rounded-lg shadow-md">
      <thead className="bg-[#EB9721]" style={{ filter: "brightness(1.2)" }}>

    <tr>
      <th className="px-6 py-3 text-left font-semibold text-black-600 border-b border-[#EADFD2]">Student Name</th>
      <th className="px-6 py-3 text-left font-semibold text-black-600 border-b border-[#EADFD2]">Date</th>
      <th className="px-6 py-3 text-left font-semibold text-black-600 border-b border-[#EADFD2]">Games</th>
      <th className="px-6 py-3 text-left font-semibold text-black-600 border-b border-[#EADFD2]">Games Level</th>
      <th className="px-6 py-3 text-left font-semibold text-black-600 border-b border-[#EADFD2]">Score</th>
      <th className="px-6 py-3 text-left font-semibold text-black-600 border-b border-[#EADFD2]">Stars Received</th>
    </tr>
  </thead>
  <tbody>
    {filteredScores.length > 0 ? (
      filteredScores.map((data, index) => (
        <tr
          key={index}
          className={`${
            index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#FBF7F0]'
          } border-t border-[#EADFD2]`}
        >
          <td className="px-6 py-4 rounded-l-lg">{data.playerName}</td>
          <td className="px-6 py-4">{formatDate(data.date)}</td>
          <td className="px-6 py-4">{data.gameName}</td>
          <td className="px-6 py-4">{data.difficulty}</td>
          <td className="px-6 py-4">{data.score}</td>
          <td className="px-6 py-4 rounded-r-lg">{renderStars(data.score)}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td
          colSpan="6"
          className="px-6 py-4 text-center text-gray-500 bg-[#FBF7F0] rounded-lg"
        >
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
