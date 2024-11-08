import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import mathImage1 from "../../images/games/bg2.png";
import mathLetters from "../../images/games/mathLetters.png";
import lutters from "../../images/games/lutters.png";
import mathcount from "../../images/games/mathcount.png"

const MathGame = () => {
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

  const categories = [
    { name: "Addition", value: "addition" },
    { name: "Subtraction", value: "subtraction" },
    { name: "Multiplication", value: "multiplication" },
  ];

  const difficulties = [
    { name: "Easy", value: "easy" },
    { name: "Normal", value: "normal" },
    { name: "Hard", value: "hard" },
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
  };

  const startGame = () => {
    setCorrectMatches([]); // Reset correct matches
    setQuestionIndex(0); // Reset question index
    setGameStarted(true);
    setModalMessage(""); // Clear modal message on start
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen ">
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
        
            <div className="absolute">
            <img src={mathcount} alt="mathcount" className="top-0" style={{ filter: "brightness(100%)" }}/>
              <h1
                className="text-4xl font-extrabold text-blue-700 mb-4"
                style={{ filter: "brightness(100%)" }}
              >
                🎉 Math Card Game 🎉
              </h1>
             
              <h2
                className="text-2xl font-semibold text-green-600"
                style={{ filter: "brightness(100%)" }}
              >
                Score: {score}
              </h2>

              {!category && (
                <div
                  className="mt-6 flex flex-col items-center space-y-4"
                  style={{ filter: "brightness(100%)" }}
                >
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      className="bg-blue-500 text-white text-lg font-bold p-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 w-48"
                      onClick={() => handleCategorySelect(cat.value)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}

              {category && !difficulty && (
                <div
                  className="mt-6 flex flex-col items-center space-y-4"
                  style={{ filter: "brightness(100%)" }}
                >
                  {difficulties.map((diff) => (
                    <button
                      key={diff.value}
                      className="bg-green-500 text-white text-lg font-bold p-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 w-48"
                      onClick={() => handleDifficultySelect(diff.value)}
                    >
                      {diff.name}
                    </button>
                  ))}
                </div>
              )}

              {question && (
                <div
                  className="mt-6 w-full max-w-md"
                  style={{ filter: "brightness(100%)" }}
                >
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-purple-600">
                      {question.questionText}
                    </h3>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {question.options.map((option, idx) => (
                        <button
                          key={idx} 
                          className="bg-yellow-200 text-lg font-semibold p-4 rounded-lg hover:bg-yellow-300 transition duration-200"
                          onClick={() => handleAnswer(option)}
                          disabled={answered}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {answered && !showModal && (
              <button
                className="mt-5 bg-pink-500 text-white text-lg font-bold p-4 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300" style={{ filter: "brightness(100%)" }}
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            )}

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
                    onClick={() => window.location.reload()}
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
