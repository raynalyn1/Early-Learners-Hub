import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import mathImage1 from "../../images/games/mathImage1.png";
import mathLetters from "../../images/games/mathLetters.png";
import lutters from "../../images/games/lutters.png";
import mathcount from "../../images/games/mathcount.png";
import rb from "../../images/games/rb.png";
import arow from "../../images/games/arow.png";
import "./MathGames.css";
const MathGame = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { width, height } = useWindowSize(); // Confetti dimensions
  const [correctMatches, setCorrectMatches] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [modalMessage, setModalMessage] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [animate, setAnimate] = useState(false);

  const categories = [
    { name: "ADDITION", value: "addition" },
    { name: "SUBTRACTION", value: "subtraction" },
    { name: "MULTIPLICATION", value: "multiplication" },
  ];

  const difficulties = [
    { name: "EASY", value: "easy" },
    { name: "NORMAL", value: "normal" },
    { name: "HARD", value: "hard" },
  ];

  const questionLimit = {
    easy: 10,
    normal: 15,
    hard: 20,
  };

  const generateQuestion = (cat, diff) => {
    let num1, num2;
    if (diff === "easy") {
      num1 = Math.floor(Math.random() * 5);
      num2 = Math.floor(Math.random() * 5);
    } else if (diff === "normal") {
      num1 = Math.floor(Math.random() * 10);
      num2 = Math.floor(Math.random() * 10);
    } else {
      num1 = Math.floor(Math.random() * 20);
      num2 = Math.floor(Math.random() * 20);
    }

    let questionText, correctAnswer;

    switch (cat) {
      case "addition":
        questionText = `${num1} + ${num2}`;
        correctAnswer = num1 + num2;
        break;
      case "subtraction":
        questionText = `${num1} - ${num2}`;
        correctAnswer = num1 - num2;
        break;
      case "multiplication":
        questionText = `${num1} × ${num2}`;
        correctAnswer = num1 * num2;
        break;
      default:
        return null;
    }

    const options = generateOptions(correctAnswer, difficulty);
    return { questionText, correctAnswer, options };
  };

  

  const generateOptions = (correctAnswer, difficulty) => {
    const options = new Set();
    options.add(correctAnswer);

    // Define a range based on difficulty for wrong answers
    const range = difficulty === "easy" ? 2 : difficulty === "normal" ? 5 : 10;

    // Generate wrong answers close to the correct answer
    while (options.size < 4) {
      const wrongAnswer =
        correctAnswer + (Math.floor(Math.random() * (range * 2 + 1)) - range);
      // Ensure the wrong answer is not the same as the correct answer and within reasonable bounds
      if (wrongAnswer !== correctAnswer && wrongAnswer >= 0) {
        options.add(wrongAnswer);
      }
    }

    return Array.from(options).sort(() => Math.random() - 0.5);
  };

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setDifficulty(null);
    setQuestion(null);
  };

  const handleDifficultySelect = (diff) => {
    setDifficulty(diff);
    setQuestion(generateQuestion(category, diff));
    setQuestionsCount(0);
  };

  const handleAnswer = (selectedAnswer) => {
    setAnswered(true);
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }

    setQuestionsCount(questionsCount + 1);
    if (questionsCount + 1 >= questionLimit[difficulty]) {
      setShowModal(true); // Show modal after all questions are answered
    }
  };

  const handleNextQuestion = () => {
    if (questionsCount + 1 < questionLimit[difficulty]) {
      setQuestion(generateQuestion(category, difficulty));
      setAnswered(false);
    } else {
      setShowModal(true);
    }
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10); // Brief delay to restart animation
  };

  const startGame = () => {
    setCorrectMatches([]); // Reset correct matches
    setQuestionIndex(0); // Reset question index
    setGameStarted(true);
    setModalMessage(""); // Clear modal message on start
  };
  const handleBackNavigation = () => {
    navigate("/GamesSection"); // Update to the actual path you want to navigate to
  };

  return (
    <div className="flex flex-col items-center relative  ">
      <div className="flex items-center justify-center h-screen">
        <img
          src={mathImage1}
          alt="bg"
          className="w-full absolute inset-0 h-full object-cover"
          style={{ opacity: 0.6 }}
        />

        {!gameStarted ? (
          <div className="flex flex-col items-center relative">
            <img
              src={mathLetters}
              alt=""
              style={{ filter: "brightness(100%)" }}
            />
            <img src={lutters} alt="" style={{ filter: "brightness(100%)" }} />

            <button
              onClick={startGame}
              className="px-8 py-4 text-2xl font-bold text-[#94682A] bg-[#FFE0B5] rounded-3xl shadow-2xl hover:bg-[#FFE0B5]-600 transition-colors duration-200 animate-pulse"
              style={{ filter: "brightness(100%)", position: "relative" }}
            >
              Start Game
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-start mr-[10rem]">
              {!category && ( // Only show the image if no category is selected
                <img
                  src={mathcount}
                  alt="mathcount"
                  className="w-[90%]"
                  style={{ filter: "brightness(100%)" }}
                />
              )}
            </div>

            <div className="flex">
              <h1
                className="text-4xl font-extrabold text-blue-700 mb-4"
                style={{ filter: "brightness(100%)" }}
              >
                {/* 🎉 Math Card Game 🎉 */}
              </h1>

              <h2
                className="text-2xl font-semibold text-green-600"
                style={{ filter: "brightness(100%)" }}
              >
                {/* Score: {score} */}
              </h2>

              {!category && (
                <div
                  className="flex flex-col items-center space-y-10 mr-[10rem]"
                  style={{ filter: "brightness(100%)" }}
                >
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      className="bg-[#FFC87A] text-[#7E4F0E] text-[40px] font-bold p-7  rounded-[40px] shadow-lg hover:bg-[##7E4F0E] transition duration-300 w-[100%] gap-y-2"
                      onClick={() => handleCategorySelect(cat.value)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
              <img
                src={arow}
                alt="arrowback"
                onClick={handleBackNavigation}
                className="absolute left-0 top-4 cursor-pointer w-40h-40 z-20"
              />
              {category && !difficulty && (
                <div className="mt-6 flex flex-col items-center space-y-4 gap-3">
                  <div
                    className="flex items-center text-[#7E4F0E] text-3xl font-bold bg-[#E1F2F4] border-8 border-[#3CA1B5] rounded-2xl px-10 py-4 shadow-md"
                    style={{
                      filter: "brightness(100%)",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                      width: "100%", // Full width of the container
                      maxWidth: "800px", // Optional: limit max width
                    }}
                  >
                    <img src={rb} alt="" className="w-20 h-auto mr-5" />
                    <p className="flex-grow text-center">
                      CHOOSE YOUR FAVORITE LEVEL
                    </p>
                  </div>

                  {difficulties.map((diff) => (
                    <button
                      key={diff.value}
                      style={{ filter: "brightness(100%)" }}
                      className="bg-[#FFCF8C] text-[#7E4F0E] text-[30px] font-bold px-9 py-3 w-[70%] rounded-[40px] shadow-lg hover:bg-[#FFCF8C] transition duration-300 border border-[#7E4F0E]"
                      onClick={() => handleDifficultySelect(diff.value)}
                    >
                      {diff.name}
                    </button>
                  ))}
                </div>
              )}

{question && (
      <div
        className="items-center justify-center md:mt-[15rem]"
        style={{ filter: "brightness(100%)" }}
      >
        <div className="mt-4 grid grid-cols-2 gap-9">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              className="bg-yellow-200 text-5xl font-bold p-10 py-8 rounded-xl hover:bg-yellow-300 transition duration-200"
              onClick={() => handleAnswer(option)}
              disabled={answered}
              style={{
                animation: animate ? `dropdown 0.5s ease-out both, bounceTwice 0.8s ease-in-out 0.5s forwards` : "none",
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <h3 className="text-[200px] font-bold text-purple-600 border top-0 sm:mt-[2rem] border-[#FFCF8C] bg-[#FFCF8C] sm:w-[60%] sm:h-[300px] md:w-[700px] md:h-[400px] flex items-center justify-center">
          {question.questionText}
        </h3>

        {answered && !showModal && (
              <div className=" relative  ">
                <button
                  className="bg-pink-500 text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300 mt-8 bg-blue-500 text-white p-4 rounded md:ml-[13rem] "
                  style={{ filter: "brightness(100%)" }}
                  onClick={handleNextQuestion}
                >
                  Next Question
                </button>
              </div>
            )}
        <div className="rounded-lg w-full max-w-5xl p-40"></div>
      </div>
    )}
 

            </div>
           

            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                <div className="bg-white p-8 rounded-lg shadow-xl relative">
                  <h2 className="text-3xl font-bold text-green-600">
                    🎊 Congratulations! 🎊
                  </h2>
                  <p className="mt-4 text-lg">
                    You completed the game with a score of {score}!
                  </p>
                  <p className="mt-2 text-lg">Difficulty: {difficulty}</p>
                  <button
                    className="mt-6 bg-blue-500 text-white text-lg font-bold p-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() =>  setDifficulty(null)}
                  >
                    Play Again
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {showModal && (
        <div className="absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center">
          <Confetti width={width} height={height} />
        </div>
      )}
    </div>
  );
};

export default MathGame;
