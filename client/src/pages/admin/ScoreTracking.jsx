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
  const [currentDate, setCurrentDate] = useState('');

  const [username, setUserName] = useState('');

  // Fetch data from API
  useEffect(() => {
    const fetchScoreData = async () => {
      try {
        const response = await fetch('http://localhost:3000/games'); // Replace with your API endpoint
        const data = await response.json();
        
        // Map the data for tournaments and students
        const uniqueTournaments = [...new Set(data.map(item => item.gameName))];
        const uniqueStudents = [...new Set(data.map(item => item.playerName))];

        setScoreData(data);
        setTournaments(uniqueTournaments);
        setStudents(uniqueStudents.map((name, id) => ({ id, name }))); // Generate student objects
        setGamesLevel(['Easy', 'Normal', 'Hard']); // Replace with actual levels if available
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    };

    fetchScoreData();
  }, []);

  // Format current date
  useEffect(() => {
    const name = localStorage.getItem('name');
    const today = new Date();
    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDate);
    if (name) {
      setUserName(name);
    }
  }, []);

  const getInitials = (name) => {
    const nameParts = name.split(" ");
    const firstNameInitial = nameParts[0]?.charAt(0).toUpperCase();
    const lastNameInitial = nameParts[1]?.charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
  };

  const filteredScores = scoreData.filter((data) => {
    return (
      (selectedStudent === "All" || data.playerName === selectedStudent) &&
      (selectedTournament === "All" || data.gameName === selectedTournament) &&
      (selectedGameLevel === "All" || data.difficulty === selectedGameLevel)
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
        <h2 className="text-3xl font-bold text-[#F47C21] mb-6">Score Tracking</h2>
        <div className="text-gray-500">Wednesday, 06 November 2024</div>
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
            {username ? getInitials(username) : "??"}
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
                <td className="px-4 py-2">{data.playerName}</td>
                <td className="px-4 py-2">{data.gameName}</td>
                <td className="px-4 py-2">{data.difficulty}</td>
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
