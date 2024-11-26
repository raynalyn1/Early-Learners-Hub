// src/WordMatch.js
import React, { useState, useEffect } from "react";
import "./WordMatch.css"; // Import your CSS file here
import { useNavigate } from "react-router-dom";
import bg from "../../images/games/matchBg.png";
import loading from "../../images/games/loading.gif";
import db from "../../images/games/dogApple.png";
import pd from "../../images/games/pd.png";
import matching from "../../images/games/matching.png";
import arow from "../../images/games/arow.png";
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

const difficultyLevels = [
  { level: "Easy", time: 20 },
  { level: "Medium", time: 20 },
  { level: "Hard", time: 10 },
];
const difficulty = 0;

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
  const [timer, setTimer] = useState(20);
  //get the player name and the name of the game
  const [playerName, setPlayerName] = useState('');
  const [gameName, setGameName] = useState('');
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [missedAnswers, setMissedAnswers] = useState(0);
  const TOTAL_QUESTIONS = 10; // Adjust the value as needed.
  const isGameActive = gameStarted;
  const showCorrectModal = modalVisible;

  useEffect(() => {
    // Simulate loading delay (e.g., API call)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false when done
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    let countdown = null;
    if (isGameActive && timer > 0 && !showCorrectModal) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      handleTimeout();
    }
    return () => clearInterval(countdown);
  }, [isGameActive, timer, showCorrectModal]);

  useEffect(() => {
    if (gameStarted && !isLoading) {
      generateQuestion();
    }
  }, [gameStarted, questionIndex, isLoading]);

  const handleTimeout = () => {
    setModalMessage("Time's up! Try again.");
    setModalVisible(true);
    setMissedAnswers(prev => prev + 1);
    setTimeout(() => {
      setModalVisible(false);
      if (questionIndex === TOTAL_QUESTIONS - 1) {
        setAchievementVisible(true);
        setGameStarted(false);
        postGameResults(); // Post results when game ends
      } else {
        setQuestionIndex((prevIndex) => prevIndex + 1);
        setTimer(10);
      }
    }, 1000);
  };

  const generateQuestion = () => {
    const selectedWord = shuffledQuestions[questionIndex];

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
      setCorrectAnswers(prev => prev + 1);
      setModalMessage("Correct match!");

      // Check if we've reached 10 questions
      if (questionIndex === TOTAL_QUESTIONS - 1) {
        setAchievementVisible(true);
        setGameStarted(false);
        postGameResults(); // Post results when game ends
      } else {
        setQuestionIndex((prevIndex) => prevIndex + 1);
        setTimer(10);
        showModal();
      }
    } else {
      setMissedAnswers(prev => prev + 1);
      setModalMessage("Try again!");
      showModal();
    }
  };

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1000); // Modal will disappear after 1 second
  };

  const startGame = () => {
    shuffleQuestions(); // Shuffle questions at the start
    setCorrectMatches([]);
    setQuestionIndex(0);
    setGameStarted(true);
    setTimer(10);
    setModalMessage("");
    setCorrectAnswers(0);
    setMissedAnswers(0);
  };

  const shuffleQuestions = () => {
    const shuffled = [...wordsAndImages]
      .sort(() => Math.random() - 0.5)
      .slice(0, TOTAL_QUESTIONS); // Only take 10 questions
    setShuffledQuestions(shuffled);
  };

  const calculateScore = () => {
    const totalQuestions = TOTAL_QUESTIONS;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    return scorePercentage.toFixed(1); // Returns score with one decimal place
  };

  const postGameResults = async () => {
    try {
      const scorePercentage = calculateScore();
      
      const gameData = {
        playerName: playerName,
        gameName: gameName,
        difficulty: "Easy", // You can modify this based on your difficulty levels
        score: scorePercentage,
        missedScore: missedAnswers
      };

      const response = await fetch('http://localhost:3000/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData)
      });

      if (!response.ok) {
        throw new Error('Failed to post game results');
      }

      console.log('Game results posted successfully');
    } catch (error) {
      console.error('Error posting game results:', error);
    }
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
          <img
            src={loading}
            alt="loading"
            style={{ filter: "brightness(100%)" }}
          />
        </div>
      ) : !gameStarted ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <img
            src={bg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />

          {/* Animate the db image dropping from above */}
          <img
            src={db}
            alt="dog-bird"
            className="animate-drop mt-0"
            style={{ filter: "brightness(100%)" }}
          />

          {/* Animate pd image coming from the right */}
          <img
            src={pd}
            alt="picture-word"
            className="animate-slide-right"
            style={{ filter: "brightness(100%)" }}
          />

          {/* Animate matching image coming from the left */}
          <img
            src={matching}
            alt="matching"
            className="animate-slide-left w-full "
            style={{ filter: "brightness(100%)" }}
          />

          <h1
            className="text-5xl font-extrabold mb-4 text-purple-600"
            style={{ filter: "brightness(100%)" }}
          ></h1>

          <p
            className="mb-4 text-xl text-gray-800"
            style={{ filter: "brightness(100%)" }}
          >
            {/* Click the button below to start the game. */}
          </p>

          {/* Button with animated cursor or icon to guide the start */}
          <button
            onClick={startGame}
            className="px-8 py-4 text-2xl font-bold text-[#94682A] bg-[#FFE0B5] rounded-3xl shadow-2xl hover:bg-[#FFE0B5]-600 transition-colors duration-200 animate-pulse"
            style={{ filter: "brightness(100%)", position: "relative" }}
          >
            Start Game
            <span
              className="animate-bounce pointer-icon"
              style={{ color: "#F4DAB5" }}
            >
              👉
            </span>
          </button>
        </div>
      ) : (
        <div className="w-full max-w-lg mx-auto text-center">
          <img
            src={bg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            style={{ opacity: 0.7 }} // Adjust to your preferred opacity
          />
          <img
            src={arow}
            alt="arrowback"
            onClick={handleBackNavigation}
            className="absolute left-0 top-4 cursor-pointer w-40h-40 z-20"
          />
          <h1
            className="text-5xl font-extrabold mb-6 text-purple-600"
            style={{ filter: "brightness(100%)" }}
          >
            {/* Word Match Game */}
          </h1>
          <div className="mb-4">
            <div className="timer-bar w-1/3 mx-auto bg-gray-200 rounded-full h-6 mb-4 border border-[#EE910E] relative">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-1000 flex items-center justify-center"
                style={{
                  width: `${(timer / 10) * 100}%`,
                }}
              >
                <p className="text-white font-semibold w-full text-center">
                  {timer}
                </p>
              </div>
            </div>
            <br />
            <br />
            <img
              src={shuffledQuestions[questionIndex]?.image}
              alt={currentWord}
              className="mb-6 mx-auto rounded-lg bg-[#ECFFD9]"
              style={{
                width: "400px",
                height: "400px",
                objectFit: "cover",
                filter: "brightness(100%)",
              }}
            />
          </div>
          <div className="flex flex-wrap justify-center mb-6">
            {options.map((option) => (
              <button
                key={option.word}
                className={`m-2 px-6 py-3 text-lg font-bold text-[#7E4F0E] bg-[#E9FFEC] rounded-lg shadow-lg hover:bg-[##E9FFEC] transition-colors duration-200 border border-[#406817]`}
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
          <div className="bg-[#FFE7C7] p-8 rounded-lg shadow-lg transform transition-transform duration-300 scale-100 max-w-xs w-full">
            {/* Level Display */}

            {/* Congratulatory Message */}
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-700">
              Congratulations!
            </h2>

            {/* Stars Display */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-3xl">
                  ⭐
                </span>
              ))}
            </div>

            {/* Mission Display */}
            <div className="text-center mb-4">
              <p className="font-semibold text-gray-700">Mission:</p>
              <p className="text-gray-500">
                Completed {correctAnswers} out of {TOTAL_QUESTIONS} questions
              </p>
            </div>

            {/* Score and Missed */}
            <div className="flex justify-around mb-4">
              <div className="text-center">
                <p className="font-semibold text-gray-700">Score:</p>
                <p className="text-gray-500">{correctAnswers}/{correctAnswers + missedAnswers}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-700">Missed:</p>
                <p className="text-gray-500">{missedAnswers}</p>
              </div>
            </div>

            {/* Exit and Retry Buttons */}
            <div className="flex justify-around mt-6">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition-colors duration-200"
                onClick={() => {
                  setAchievementVisible(false);
                }}
              >
                Exit
              </button>
              <button
                className="px-4 py-2 bg-orange-300 text-orange-700 rounded-lg shadow hover:bg-orange-400 transition-colors duration-200"
                onClick={() => {
                  setAchievementVisible(false);
                  startGame(); // Restart the game
                }}
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordMatch;
