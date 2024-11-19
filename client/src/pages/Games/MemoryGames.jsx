import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import BackgroundAudio from "../../../src/Audio/backgroundAudio.mp3";
import progressbar from "../../components/progressbar";
import "./MemoryGame.css"; // Import a separate CSS file for styles
// import img from "../../images/games/arrow.png";
import img1 from "../../images/games/load.png";
import img2 from "../../images/games/cbl.png";
import img3 from "../../images/games/robot.png";
import img4 from "../../images/games/2bg.png";
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
  const [showStats, setShowStats] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showLevelSelection, setShowLevelSelection] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const [isGameActive, setIsGameActive] = useState(false);


  // const [progressTimer, setprogressTimer] = useState(30);

  const audio = new Audio(BackgroundAudio);

  const getButtonAnimationClass = (index) => {
    switch (index) {
      case 0: // "easy" (above)
        return "animate-from-top";
      case 1: // "normal" (from right)
        return "animate-from-right";
      case 2: // "hard" (from left)
        return "animate-from-left";
      default:
        return "";
    }
  };

  // Simulate loading before showing the play button
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // After loading, hide the loading screen
    }, 1000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Cleanup the interval when the component unmounts or timer reaches 0
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  const startGame = (level, levelName) => {
    setIsGameActive(true); // Game is now active
    setSelectedLevel(levelName); // Set the selected level
    resetGame();
    generateCards(level);
    setDifficulty(levelName);
    setShowStats(true); // Show stats during the game
    setShowLevelSelection(false); // Hide level selection during the game
    console.log(`Starting game with difficulty: ${level}`);
  };


  const endGame = () => {
    setIsGameActive(false); // Game has ended
    setShowStats(false); // Hide stats
    setSelectedLevel(null); // Reset selected level to show all buttons
    setShowLevelSelection(true); // Show level selection again
  };

  const getUniqueMatchedLetters = () => {
    // Create a Set from matchedCards to get unique letters
    const uniqueIcons = [...new Set(matchedCards.map((index) => cards[index]))];

    // Sort the unique letters in alphabetical order
    uniqueIcons.sort();

    return uniqueIcons;
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
    setShowLevelSelection(true); // Show level selection screen
  };
  const exitGame = () => {};
  const nextLevel = () => {};
  const generateCards = (level) => {
    const iconPool = icons.slice(0, level / 2);
    const cardIcons = [...iconPool, ...iconPool];
    const shuffledCards = cardIcons.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);




    if (level === 6) {
      setGridCols("grid-cols-3");
    } else if (level === 10) {
      setGridCols("grid-cols-5");
    } else if (level === 12) {
      setGridCols("grid-cols-6");
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
      audio.play();
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
    easy: 6,
    normal: 10,
    hard: 12,
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
              className="inline-block mr-2  w-[25%] h-[12vh]"
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
          {showStats && (
            <div
              className="text-black text-xl right"
              style={{ filter: "brightness(100%)" }}
            >
              <div>Flip: {flipCount} </div>
              <div className="timer-bar bg-gray-200 rounded-full h-6 mb-6">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${
                      (timer / difficultyLevels[difficulty].time) * 100
                    }%`,
                  }}
                >
                  Time: {timer} seconds
                </div>
              </div>
            </div>
          )}
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
          {showLevelSelection && (
            <h1 className="text-[100px] font-bold text-white mb-[5rem] flex space-x-1 ">
              {"CHOOSE".split("").map((letter, index) => (
                <span
                  key={`choose-${index}`}
                  className="bending-letter"
                  style={{
                    color: ["#FF5733", "#33FF57", "#3357FF"][index % 3], // Cycle through three colors
                    animationDelay: `${index * 0.1}s`, // Stagger the animation for each letter
                    filter: "brightness(100%)",
                  }}
                >
                  {letter}
                </span>
              ))}
              <span className="bending-letter" style={{ animationDelay: "1s" }}>
                &nbsp;
              </span>{" "}
              {/* Space between words */}
              {"LEVEL".split("").map((letter, index) => (
                <span
                  key={`level-${index}`}
                  className="bending-letter"
                  style={{
                    color: ["#FF5733", "#33FF57", "#3357FF"][index % 3], // Cycle through three colors
                    animationDelay: `${(index + 4) * 0.1}s`, // Stagger the animation for each letter
                    filter: "brightness(100%)",
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          )}

          <div className="mb-4 flex  items-center justify-center flex flex-col gap-9 md:w-[100%]">
             {Object.keys(difficultyLevels).map((level, index) => (
        (!selectedLevel || selectedLevel === level) && (
          <button
          key={level}
          onClick={() => startGame(difficultyLevels[level], level)}
          className={`px-5 py-4 mx-2 text-[#7E4F0E] bg-[#FFCF8C] rounded-full hover:bg-[#FFCF8C]-600 transition-transform transform hover:scale-110 text-2xl w-[40%] font-semibold ${getButtonAnimationClass(
            index
          )}`}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </button>
        )
      ))}
          </div>
          <div className={`grid ${gridCols} gap-4`}>
          {cards.map((icon, index) => (
            <div
              key={index}
              className={`w-60 h-60 flex items-center justify-center border-2 border-[#7E4F0E] rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105
                ${
                  flippedCards.includes(index) || matchedCards.includes(index)
                    ? "bg-white text-gray-800"
                    : "bg-[#FFCF8C] text-white"
                }`}
              style={{
                backgroundImage:
                  flippedCards.includes(index) || matchedCards.includes(index)
                    ? "none"
                    : `url(${logo})`,
                backgroundSize: "50% auto",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => flipCard(index)}
            >
              {(flippedCards.includes(index) || matchedCards.includes(index)) && (
                <span style={{ fontSize: "7rem", color: "#7E4F0E" }}>
                  {icon}
                </span>
              )}
            </div>
          ))}
        </div>

          {gameOver && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="bg-[#EBCEA8] p-8 rounded-[20px] shadow-lg text-center relative z-50 w-80">
                {/* Level Badge */}
                <div className="text-sm font-bold bg-[#DFC3A2] text-[#5C4A30] py-2 px-4 rounded-full mb-4 w-fit mx-auto">
                  LEVEL:{" "}
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </div>

                {/* Message */}
                <h2 className="text-2xl font-bold text-[#5C4A30] italic mb-4">
                  That was <span className="text-[#A56922]">Awesome!</span>
                </h2>

                {/* Mission Box */}
                <div className="bg-[#F3E2C5] border border-[#A56922] rounded-md p-4 mb-4">
                  <p className="text-[#5C4A30] font-semibold">Mission:</p>
                  <p className="text-[#5C4A30] mb-3">
                    Successfully Matched Letters
                  </p>
                  <div className="flex justify-around text-[#5C4A30] font-bold text-xl">
                    {getUniqueMatchedLetters().map((icon, index) => (
                      <span key={index}>{icon}</span>
                    ))}
                  </div>
                </div>

                {/* Star Ratings */}
                {/* <div className="flex justify-center space-x-4 mb-4">
                  <img src="star-filled.png" alt="Star" className="w-8 h-8" />{" "}
                  <img src="star-filled.png" alt="Star" className="w-8 h-8" />{" "}
                  <img src="star-outline.png" alt="Star" className="w-8 h-8" />{" "}
                </div> */}

                {/* Next, Exit, and Retry Buttons */}
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleBackNavigation}
                    className="px-6 py-2 text-white bg-[#F2B053] rounded-full hover:bg-[#E1A443] shadow-lg"
                  >
                    Exit
                  </button>
                  <button
                    onClick={resetGame}
                    className="px-6 py-2 text-white bg-[#F2B053] rounded-full hover:bg-[#E1A443] shadow-lg"
                  >
                    Retry
                  </button>
                </div>
                {/* <button
                  onClick={() => nextLevel()}
                  className="px-10 py-2 mt-4 text-white bg-[#F2B053] rounded-full hover:bg-[#E1A443] shadow-2xl"
                >
                  Next
                </button> */}
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
