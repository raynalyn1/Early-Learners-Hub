import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import memory from "../../images/games/MemoryGames.png";
import math from "../../images/games/MathCardGames.png";
import img12 from "../../images/games/WordGames.png";
import Footer from "../../components/Footer";
import animalScrumble from "../../images/games/animalScrumble.png";
import exit from "../../images/image 126.png"; // Make sure this path is correct

const GameSect = () => {
  const navigate = useNavigate();

  // State to handle navbar visibility
  const [isGameStarted, setIsGameStarted] = useState(false);

  // State to handle button click effects
  const [clicked, setClicked] = useState(null);

  // State to handle modal visibility and input
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [childName, setChildName] = useState("");
  const [selectedGame, setSelectedGame] = useState(""); 

  // State for sorting games by category
  const [selectedCategory, setSelectedCategory] = useState("");

  // Handle modal submission
  const handleSubmit = () => {
    if (childName.trim() === "") {
      alert("Please enter the child's name");
      return;
    }

    setIsGameStarted(true);
    setIsModalOpen(false); // Close modal

    if (selectedGame === "memory") {
      navigate("/MemoryGames");
    } else if (selectedGame === "math") {
      navigate("/MathGames");
    } else if (selectedGame === "word") {
      navigate("/WordGames");
    }
    else if (selectedGame === "AnimalGames") {
      navigate("/AnimalGames");
    }
  };

  const openModalForGame = (game) => {
    setClicked(game);
    setSelectedGame(game);
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setChildName(""); // Clear the input field when closing
  };

  // Filter games based on selected category
  const filteredGames = () => {
    if (selectedCategory === "Math") {
      return [
        { image: math, title: "Math Game", description: "Simple but enjoying Math games with add, subtract and multiply symbol.", game: "math" },
      ];
    } else if (selectedCategory === "Literacy") {
      return [
        { image: memory, title: "Memory Game", description: "Match the elements shapes to their same elements.", game: "memory" }
      ];
    } else if (selectedCategory === "Phonics") {
      return [
        { image: img12, title: "Word Pic Game", description: "Knowing the name of the picture make u know the name.", game: "word" },
        { image: animalScrumble, title: "Animal Games", description: "Fun games to unscramble animal names!", game: "AnimalGames" },
        ,
      ];
    }
    return [
      { image: memory, title: "Memory Game", description: "Match the elements shapes to their same elements.", game: "memory" },
      { image: math, title: "Math Game", description: "Simple but enjoying Math games with add, subtract and multiply symbol.", game: "math" },
      { image: img12, title: "Word Pic Game", description: "Knowing the name of the picture make u know the name.", game: "word" },
      { image: animalScrumble, title: "Animal Games", description: "Fun games to unscramble animal names!", game: "AnimalGames" },
    ];
  };

  return (
    <div>
      {!isGameStarted}

      <div className="bg-[#EB9721] w-full px-5 relative">
        <div className="bg-[#EBCEA8] w-full px-5 py-10">
          <div className="flex justify-between items-center mb-9">
            <h1 className="text-2xl font-semibold text-start">
              Educational Games
            </h1>
            <select
              className="border border-[#EB9721] text-gray-800 font-semibold py-2 px-4 rounded-md ml-auto"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Games Categories</option>
              <option value="Math">Math</option>
              <option value="Literacy">Literacy</option>
              <option value="Phonics">Phonics</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
            {filteredGames().map((game, index) => (
              <div key={index} className="bg-[#F3CA79] rounded-lg shadow-lg p-5">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{game.title}</h2>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <button
                  onClick={() => openModalForGame(game.game)}
                  className={`${
                    clicked === game.game ? "bg-orange-600" : "bg-orange-500"
                  } text-white py-2 px-4 rounded hover:bg-orange-600 active:scale-95 transition-transform`}
                >
                  Play
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96 relative">
            <span
              onClick={closeModal}
              className="absolute top-1 right-2 cursor-pointer"
            >
              <img src={exit} alt="Exit" className=" w-10 h-10" />
            </span>
            <div className="p-[2%]">
              <h2 className="text-xl font-bold mb-4 p-[1%]">
                Enter Student's Name
              </h2>
            </div>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Student's Name"
            />
            <button
              onClick={handleSubmit}
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 active:scale-95 transition-transform w-full mb-2"
            >
              Start Game
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GameSect;
