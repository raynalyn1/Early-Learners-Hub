// src/WordMatch.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../images/games/nbg.png";
import loading from "../../images/games/loading.gif";
import db from "../../images/games/dog-bird.png";
import pd from "../../images/games/pd.png";
import matching from "../../images/games/matching.png";
import arow from "../../images/games/arow.png"
const wordsAndImages = [
  { word: "Cat", image: "https://img.icons8.com/color/96/000000/cat.png" },
  { word: "Dog", image: "https://img.icons8.com/color/96/000000/dog.png" },
  { word: "Apple", image: "https://img.icons8.com/color/96/000000/apple.png" },
  {
    word: "Banana",
    image: "https://img.icons8.com/color/96/000000/banana.png",
  },
  { word: "Fish", image: "https://img.icons8.com/color/96/000000/fish.png" },
  { word: "Frog", image: "https://img.icons8.com/color/96/000000/frog.png" },
  { word: "Car", image: "https://img.icons8.com/color/96/000000/car.png" },
  { word: "Bird", image: "https://img.icons8.com/color/96/000000/bird.png" },
  {
    word: "Flower",
    image: "https://img.icons8.com/color/96/000000/flower.png",
  },
  {
    word: "Tree",
    image:
      "https://img.freepik.com/free-vector/cute-cartoon-tree-character_1308-19968.jpg",
  },
  { word: "Sun", image: "https://img.icons8.com/color/96/000000/sun.png" },
  { word: "Moon", image: "https://img.icons8.com/color/96/000000/moon.png" },
  { word: "Bear", image: "https://img.icons8.com/color/96/000000/bear.png" },
  {
    word: "Elephant",
    image: "https://img.icons8.com/color/96/000000/elephant.png",
  },
  {
    word: "Giraffe",
    image: "https://img.icons8.com/color/96/000000/giraffe.png",
  },
];

const WordMatch = () => {
    const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState("");
  const [options, setOptions] = useState([]);
  const [correctMatches, setCorrectMatches] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [achievementVisible, setAchievementVisible] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0); // Track the current question index
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate loading delay (e.g., API call)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false when done
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (gameStarted && !isLoading) {
      generateQuestion();
    }
  }, [gameStarted, questionIndex, isLoading]);

  const generateQuestion = () => {
    const selectedWord = wordsAndImages[questionIndex]; // Get the current question based on index

    // Create options (4 options: 1 correct + 3 random)
    const otherWords = wordsAndImages.filter(
      (item) => item.word !== selectedWord.word
    );
    const randomOptions = otherWords
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setOptions(
      [selectedWord, ...randomOptions].sort(() => 0.5 - Math.random())
    );
    setCurrentWord(selectedWord.word);
  };
  const handleBackNavigation = () => {
    navigate("/GamesSection"); // Update to the actual path you want to navigate to
  };
  const handleOptionClick = (word) => {
    if (word === currentWord) {
      const updatedCorrectMatches = [...correctMatches, word];
      setCorrectMatches(updatedCorrectMatches);
      setModalMessage("Correct match!");

      // Check if all questions have been answered
      if (updatedCorrectMatches.length === wordsAndImages.length - 1) {
        setAchievementVisible(true);
        setGameStarted(false); // Stop the game when all answers are correct
      } else {
        setQuestionIndex((prevIndex) => prevIndex + 1); // Move to the next question
        showModal(); // Show correct answer modal
      }
    } else {
      setModalMessage("Try again!");
      showModal(); // Show try again modal
    }
  };

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1000); // Modal will disappear after 1 second
  };

  const startGame = () => {
    setCorrectMatches([]); // Reset correct matches
    setQuestionIndex(0); // Reset question index
    setGameStarted(true);
    setModalMessage(""); // Clear modal message on start
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-200 to-blue-300">
      {isLoading ? (
        <div className="text-center">
          <img
            src={bg}
            alt="Loading background"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            style={{ filter: "brightness(100%)" }}
          />
          <img src={loading} alt="" style={{ filter: "brightness(100%)" }} />
        </div>
      ) : !gameStarted ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <img
            src={bg}
            alt="backg"
            className=" absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <img
            src={db}
            alt="dog-bird"
            className="text-center mt-0"
            style={{ filter: "brightness(100%)" }}
          />
          <img
            src={pd}
            alt="picture-word"
            className=""
            style={{ filter: "brightness(100%)" }}
          />
          <img
            src={matching}
            alt=""
            className=""
            style={{ filter: "brightness(100%)" }}
          />
          <h1
            className="text-5xl font-extrabold mb-4 text-purple-600 "
            style={{ filter: "brightness(100%)" }}
          ></h1>
          <p
            className="mb-4 text-xl text-gray-800"
            style={{ filter: "brightness(100%)" }}
          >
            {/* Click the button below to start the game. */}
          </p>
          <button
            onClick={startGame}
            className="px-8 py-4 text-2xl font-bold text-[#94682A] bg-[#FFE0B5] rounded-3xl shadow-2xl hover:bg-[#FFE0B5]-600 transition-colors duration-200"
            style={{ filter: "brightness(100%)" }}
          >
            Start Game
          </button>
        </div>
      ) : (
        <div className="w-full max-w-lg mx-auto text-center">
          <img src={bg}
           alt="background" 
           className="absolute inset-0 w-full h-full object-cover opacity-90"
           
          />
          <img
            src={arow}
            alt="arrowback"
            onClick={handleBackNavigation}
            className="absolute left-0 top-4 cursor-pointer w-40h-40 z-20"
          />
          <h1 className="text-5xl font-extrabold mb-6 text-purple-600" style={{ filter: "brightness(100%)" }}>
            Word Match Game
          </h1>
          <div className="mb-4">
            <img
              src={wordsAndImages[questionIndex]?.image}
              alt={currentWord}
              className="w-40 h-40 mb-6 mx-auto rounded-lg shadow-lg"
              style={{ filter: "brightness(100%)" }}
            />
          </div>
          <div className="flex flex-wrap justify-center mb-6">
            {options.map((option) => (
              <button
                key={option.word}
                className={`m-2 px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-200`}
                onClick={() => handleOptionClick(option.word)}
                style={{ filter: "brightness(100%)" }}
              >
                {option.word}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 transition-opacity duration-300">
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 scale-100 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-600">
              {modalMessage}
            </h2>
          </div>
        </div>
      )}

      {/* Achievement Modal */}
      {achievementVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 transition-opacity duration-300">
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 scale-100 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
              Congratulations!
            </h2>
            <p className="text-lg text-center">You've matched all the words!</p>
            <button
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-200"
              onClick={() => {
                setAchievementVisible(false);
                startGame(); // Restart the game
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordMatch;
