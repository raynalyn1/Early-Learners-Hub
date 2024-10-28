import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import "./MemoryGame.css"; // Import a separate CSS file for styles
// import img from "../../images/games/arrow.png";
import img1 from "../../images/games/load.png";
import img2 from "../../images/games/cbl.png";
import img3 from "../../images/games/robot.png";
import img4 from "../../images/games/bg.png";
import logo from "../../images/footer/logo.png";
import img5 from "../../images/games/memory.png";
import img6 from "../../images/games/mct.png";
import img7 from "../../images/games/letters.png";
import loading from "../../images/games/loading.gif";
import GameModal from "../general/GameModal";
import arow from "../../images/games/arow.png";

const icons = [
  "Aa",
  "Bb",
  "Cc",
  "Dd",
  "Ee",
  "Ff",
  "Gg",
  "Hh",
  "Ii",
  "Jj",
  "Kk",
  "Ll",
  "Mm",
  "Oo",
  "Pp",
  "Qr",
  "Rr",
  "Ss",
  "Tt",
  "Uu",
  "Vv",
  "Ww",
  "Xx",
  "Yy",
  "Zz",
];

const MemoryGame = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [flipCount, setFlipCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [gridCols, setGridCols] = useState("grid-cols-2");
  const [difficulty, setDifficulty] = useState("");
  const [showStats, setShowStats] = useState(false); // Only show stats after difficulty is chosen
  const [gameStarted, setGameStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading before showing the play button
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // After loading, hide the loading screen
    }, 1000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  const startGame = (level, levelName) => {
    resetGame();
    generateCards(level);
    setDifficulty(levelName);
    setShowStats(true); // Set to true after choosing difficulty
  };

  const resetGame = () => {
    setCards([]);
    setFlippedCards([]);
    setMatchedCards([]);
    setFlipCount(0);
    setTimer(0);
    setGameOver(false);
    setShowConfetti(false);
    setTimerStarted(false);
    clearInterval(intervalId);
    setShowStats(false); // Hide stats when restarting
  };

  const generateCards = (level) => {
    const iconPool = icons.slice(0, level / 2);
    const cardIcons = [...iconPool, ...iconPool];
    const shuffledCards = cardIcons.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);

    if (level === 8) {
      setGridCols("grid-cols-4");
    } else if (level === 16) {
      setGridCols("grid-cols-4");
    } else if (level === 32) {
      setGridCols("grid-cols-8");
    }
  };

  const flipCard = (index) => {
    if (!timerStarted) {
      setTimerStarted(true);
      startTimer();
    }

    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(index) &&
      !matchedCards.includes(index)
    ) {
      setFlippedCards((prev) => [...prev, index]);
      setFlipCount((prev) => prev + 1);

      if (flippedCards.length === 1) {
        setTimeout(() => checkForMatch(index), 1000);
      }
    }
  };
  const handleBackNavigation = () => {
    navigate("/GamesSection"); // Update to the actual path you want to navigate to
  };
  const checkForMatch = (secondIndex) => {
    const firstIndex = flippedCards[0];
    if (cards[firstIndex] === cards[secondIndex]) {
      setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
    }
    setFlippedCards([]);
    checkForWin();
  };

  const checkForWin = () => {
    if (matchedCards.length + 2 === cards.length) {
      clearInterval(intervalId);
      setGameOver(true);
      setShowConfetti(true);
    }
  };

  const startTimer = () => {
    const id = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
  };

  const difficultyLevels = {
    easy: 8,
    normal: 16,
    hard: 32,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 to-blue-400">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <img
            src={img4}
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />

          <img
            src={loading}
            alt="loading"
            className=""
            style={{ filter: "brightness(100%)" }}
          />
        </div>
      ) : !gameStarted ? (
        <div className=" text-center">
          <img
            src={img4}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <img
            src={img5}
            alt="memory"
            className="relative top-0 mb-8 z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl animate-slideInLeft"
            style={{
              animationDuration: "1.5s",
              animationTimingFunction: "ease-in-out",
              animationFillMode: "forwards",
            }}
          />

          <img
            src={img6}
            alt="match"
            className="w-full h-auto ml-5 sm:ml-10 md:ml-16 lg:ml-20 z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl animate-slideInRight"
            style={{
              animationDuration: "1.5s",
              animationTimingFunction: "ease-in-out",
              animationFillMode: "forwards",
            }}
          />
          <img
            src={img7}
            alt="letters"
            className="w-full h-auto mt-4 z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            style={{ filter: "brightness(100%)" }}
          />

          <button
            onClick={() => setGameStarted(true)}
            className="text-white text-3xl transform hover:scale-110 transition-all w-[80%] h-[4rem] mb-8 -translate-y-12"
          >
            <img
              src={img1}
              alt="Play Button"
              className="inline-block mr-2  w-[35%] h-[16vh]"
            />
          </button>
        </div>
      ) : (
        <div>
          <img
            src={img4}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <img
            src={arow}
            alt="arrowback"
            onClick={handleBackNavigation}
            className="absolute left-0 top-4 cursor-pointer w-40h-40 z-20"
          />
          <img
            src={img3}
            alt="Robot"
            className="absolute right-0 bottom-0"
            style={{ filter: "brightness(100%)" }}
          />
          <img
            src={img2}
            alt="cbl"
            className="absolute mb-[3rem] left-0 "
            style={{ filter: "brightness(100%)" }}
          />
          {showStats && (
            <div
              className="mt-4 text-black text-xl"
              style={{ filter: "brightness(100%)" }}
            >
              <p>Flips: {flipCount}</p>
              <p>Time: {timer} seconds</p>
            </div>
          )}
          <h1
            className="text-4xl font-bold text-white mb-4 "
            style={{ filter: "brightness(100%)" }}
          >
            Choose Level
          </h1>
          <div className="mb-4">
            {Object.keys(difficultyLevels).map((level) => (
              <button
                key={level}
                onClick={() => startGame(difficultyLevels[level], level)}
                className="px-6 py-3 mx-2 text-[#7E4F0E] bg-[#FFCF8C] rounded-full hover:bg-[#FFCF8C]-600 transition-transform transform hover:scale-105"
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
          <div className={`grid ${gridCols} gap-4`}>
            {cards.map((icon, index) => (
              <div
                key={index}
                className={`w-40 h-40 flex items-center justify-center border-2 border-[#7E4F0E] rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 ${
                  flippedCards.includes(index) || matchedCards.includes(index)
                    ? "bg-white text-gray-800"
                    : "bg-[#FFCF8C] text-white"
                }`}
                style={{
                  backgroundImage:
                    flippedCards.includes(index) || matchedCards.includes(index)
                      ? "none"
                      : `url(${logo})`,
                  backgroundSize: "50% auto", // Adjusts the logo size to be smaller
                  backgroundPosition: "center center", // Centers the logo within the card
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => flipCard(index)}
              >
                {(flippedCards.includes(index) ||
                  matchedCards.includes(index)) && (
                  <span style={{ fontSize: "5rem", color: "#7E4F0E" }}>
                    {icon}
                  </span>
                )}
              </div>
            ))}
          </div>

          {gameOver && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="bg-[#EBCEA8] p-8 rounded-[20px] shadow-lg text-center relative z-50 w-80">
                {/* Level and Message */}
                <div className="text-sm font-bold bg-[#DFC3A2] text-[#5C4A30] py-2 px-4 rounded-full mb-4 w-fit mx-auto">
                  LEVEL:{" "}
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </div>
                <h2 className="text-2xl font-bold text-[#5C4A30] mb-2">
                  That was <span className="text-[#A56922]">Awesome!</span>
                </h2>

                {/* Mission Box */}
                <div className="bg-[#F3E2C5] border border-[#A56922] rounded-md p-4 mb-4">
                  <p className="text-[#5C4A30] font-semibold">Mission:</p>
                  <p className="text-[#5C4A30] mb-3">
                    Successfully Matched Letters
                  </p>
                  <div className="flex justify-around text-[#5C4A30] font-bold text-xl">
                    <span>Aa</span>
                    <span>Bb</span>
                    <span>Cc</span>
                  </div>
                </div>

                {/* Medal Icon */}
                <img
                  src="https://img.icons8.com/color/480/gold-medal.png"
                  alt="Medal"
                  className="mx-auto my-4 w-16"
                />

                {/* Next Button */}
                <button
                  onClick={() => resetGame()}
                  className="px-10 py-2 mt-4 text-white bg-[#F2B053] rounded-full hover:bg-[#E1A443] shadow-2xl"
                >
                  Next
                </button>
              </div>
              {showConfetti && <Confetti className="fixed inset-0 z-40" />}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
