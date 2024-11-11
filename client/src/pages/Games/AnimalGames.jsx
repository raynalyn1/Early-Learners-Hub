import React, { useState, useEffect } from 'react';
import '../Games/AnimalGames.css';
import cat from '../../images/gamesimage123/cat.png';
import dog from '../../images/gamesimage123/dog.png';
import lion from '../../images/gamesimage123/lion.png';
import bear from '../../images/gamesimage123/bear.png';
import wolf from '../../images/gamesimage123/wolf.png';
import frog from '../../images/gamesimage123/frog.png';
import fish from '../../images/gamesimage123/fish.png';
import bird from '../../images/gamesimage123/bird.png';
import deer from '../../images/gamesimage123/deer.png';
import goat from '../../images/gamesimage123/goat.png';
import fox from '../../images/gamesimage123/fox.png';
import owl from '../../images/gamesimage123/owl.png';
import duck from '../../images/gamesimage123/duck.png';
import cow from '../../images/gamesimage123/cow.png';
import sheep from '../../images/gamesimage123/sheep.png';
import horse from '../../images/gamesimage123/horse.png';
import pig from '../../images/gamesimage123/pig.png';
import tiger from '../../images/gamesimage123/tiger.png';
import rabbit from '../../images/gamesimage123/rabbit.png';
import Confetti from 'react-confetti'; // Import Confetti component

// sounds
import catsound from '../../Audio/cat.mp3'
import dogsound from '../../Audio/dog.mp3'
import lionsound from '../../Audio/lion.mp3'
import bearsound from '../../Audio/bear.mp3'
import wolfsound from '../../Audio/wolf.mp3'
import frogsound from '../../Audio/frog.mp3'
import fishsound from '../../Audio/fish.mp3'
import birdsound from '../../Audio/bird.mp3'
import deersound from '../../Audio/deer.mp3'
import goatsound from '../../Audio/goat.mp3'
import foxsound from '../../Audio/fox.mp3'
import owlsound from '../../Audio/owl.mp3'
import ducksound from '../../Audio/duck.mp3'
import cowsound from '../../Audio/cow.mp3'
import sheepsound from '../../Audio/sheep.mp3'
import horsesound from '../../Audio/horse.mp3'
import pigsound from '../../Audio/pig.mp3'
import tigersound from '../../Audio/tiger.mp3'
import rabbitsound from '../../Audio/rabbit.mp3'

//bg music 
import background from '../../Audio/backgroundmusic.mp3'



// Array with animal data, including images and .mp3 audio
const animals = [
  { name: 'cat', image: cat, scrambled: 'tca', sound: catsound },
  { name: 'dog', image: dog, scrambled: 'gdo', sound: dogsound },
  { name: 'lion', image: lion, scrambled: 'onli', sound: lionsound },
  { name: 'bear', image: bear, scrambled: 'reab', sound: bearsound},
  { name: 'wolf', image: wolf, scrambled: 'lfow', sound: wolfsound },
  { name: 'frog', image: frog, scrambled: 'rgfo', sound: frogsound },
  { name: 'fish', image: fish, scrambled: 'hsif', sound: fishsound },
  { name: 'bird', image: bird, scrambled: 'rdib', sound: birdsound },
  { name: 'deer', image: deer, scrambled: 'reed', sound: deersound },
  { name: 'goat', image: goat, scrambled: 'tgoa', sound: goatsound },
  { name: 'fox', image: fox, scrambled: 'xof', sound: foxsound },
  { name: 'owl', image: owl, scrambled: 'lwo', sound: owlsound },
  { name: 'duck', image: duck, scrambled: 'ckdu', sound: ducksound },
  { name: 'cow', image: cow, scrambled: 'owc', sound: cowsound },
  { name: 'sheep', image: sheep, scrambled: 'peshe', sound: sheepsound },
  { name: 'horse', image: horse, scrambled: 'rohes', sound: horsesound },
  { name: 'pig', image: pig, scrambled: 'gpi', sound: pigsound },
  { name: 'tiger', image: tiger, scrambled: 'rtegi', sound: tigersound },
  { name: 'rabbit', image: rabbit, scrambled: 'tbarib', sound: rabbitsound },
];

const AnimalGame = () => {
    const [currentAnimal, setCurrentAnimal] = useState(null);
    const [guess, setGuess] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);
    const [failedQuestions, setFailedQuestions] = useState(0);
    const [showCorrectModal, setShowCorrectModal] = useState(false);
    const [showIncorrectModal, setShowIncorrectModal] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [timer, setTimer] = useState(30);
    const [isGameActive, setIsGameActive] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const [questionsRemaining, setQuestionsRemaining] = useState(0);
    const [difficulty, setDifficulty] = useState('');
    const [showFinalScoreModal, setShowFinalScoreModal] = useState(false);
    const [showTimeoutModal, setShowTimeoutModal] = useState(false);
    const [showDifficultySelection, setShowDifficultySelection] = useState(false);
    const [usedAnimals, setUsedAnimals] = useState([]);
    const [backgroundMusic] = useState(new Audio(background));
  
    const difficultyLevels = {
      easy: { questions: 5, time: 10 },
      normal: { questions: 10, time: 8 },
      hard: { questions: 15, time: 5 },
    };
  
    useEffect(() => {
      if (isGameActive) {
        startNewRound();
      }
    }, [isGameActive]);
  
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
      backgroundMusic.loop = true; // Enable looping
  
      if (isGameActive) {
        backgroundMusic.volume = 0.3; // Set volume to 30% (adjust as needed)
        backgroundMusic.play().catch(error => {
          console.error('Error playing background music:', error);
        });
      }
  
      // Cleanup function to pause music when game ends or component unmounts
      return () => {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
      };
    }, [isGameActive]); // Only re-run when game activity state changes
  
    const handleChange = (e) => setGuess(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (guess.toLowerCase() === currentAnimal.name) {
        setIsCorrect(true);
        setScore((prevScore) => prevScore + 1);
        playSound(currentAnimal.sound);
        setShowCorrectModal(true);
      } else {
        setIsCorrect(false);
        setFailedQuestions((prev) => prev + 1);
        setShowIncorrectModal(true);
      }
      setGuess('');
    };
  
    const playSound = (soundUrl) => {
      const audio = new Audio(soundUrl);
      audio.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    };
  
    const startNewRound = () => {
      if (questionsRemaining > 0) {
        const availableAnimals = animals.filter(animal => 
          !usedAnimals.some(usedAnimal => usedAnimal.name === animal.name)
        );
        
        const newAnimal = availableAnimals[Math.floor(Math.random() * availableAnimals.length)];
        
        setUsedAnimals(prev => [...prev, newAnimal]);
        setCurrentAnimal(newAnimal);
        setIsCorrect(null);
        setTimer(difficultyLevels[difficulty].time);
        setQuestionsRemaining(prev => prev - 1);
      } else {
        endGame();
      }
    };
  
    const handleCloseCorrectModal = () => {
      setShowCorrectModal(false);
      startNewRound(); // Start a new round after closing the modal
    };
  
    const handleCloseIncorrectModal = () => setShowIncorrectModal(false);
  
    const handleTimeout = () => {
      setShowTimeoutModal(true);
      setFailedQuestions((prev) => prev + 1);
      setTimeout(() => {
        setShowTimeoutModal(false);
        startNewRound();
      }, 2000);
    };
  
    const handleGameEnd = () => {
      setShowConfetti(true);
      setShowFinalScoreModal(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    };
  
    const endGame = () => {
      setIsGameActive(false);
      handleGameEnd();
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
    };
  
    const handleStartGame = (selectedDifficulty) => {
      setDifficulty(selectedDifficulty);
      setQuestionsRemaining(difficultyLevels[selectedDifficulty].questions);
      setScore(0);
      setFailedQuestions(0);
      setIsGameActive(true);
      setTimer(difficultyLevels[selectedDifficulty].time);
      setShowDifficultySelection(false);
      setUsedAnimals([]);
    };
  
    const handleStartButtonClick = () => {
      setShowIntro(false);
      setShowDifficultySelection(true);
    };
  
    const handleBackButtonClick = () => {
      if (showDifficultySelection) {
        setShowIntro(true);
      } else {
        setShowDifficultySelection(true);
      }
      setIsGameActive(false);
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-300 to-purple-300">
        {showIntro ? (
          <div className="intro-screen flex flex-col items-center bg-white p-8 rounded-2xl shadow-xl">
            <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
              Animal Unscramble Game!
            </h1>
            <p className="text-2xl mb-6 text-gray-700">Can you help unscramble the animal names? 🐾</p>
            <button 
              onClick={handleStartButtonClick} 
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-2xl py-4 px-8 rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg"
            >
              Let's Play! 🎮
            </button>
          </div>
        ) : (
          <>
            {showDifficultySelection && !isGameActive && (
              <div className="difficulty-selection flex flex-col items-center bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-purple-600">Choose Your Level!</h2>
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => handleStartGame('easy')} 
                    className="bg-gradient-to-r from-green-400 to-green-500 text-white text-xl py-3 px-12 rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg"
                  >
                    Easy 🌟
                  </button>
                  <button 
                    onClick={() => handleStartGame('normal')} 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xl py-3 px-12 rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg"
                  >
                    Normal ⭐
                  </button>
                  <button 
                    onClick={() => handleStartGame('hard')} 
                    className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xl py-3 px-12 rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg"
                  >
                    Hard 🌈
                  </button>
                </div>
              </div>
            )}
  
            {isGameActive && (
              <div className="game-container bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full mx-4">
                <div className="flex justify-between items-center w-full mb-6">
                  <button 
                    onClick={handleBackButtonClick} 
                    className="text-blue-500 hover:text-blue-700 text-xl font-bold"
                  >
                    ← Back
                  </button>
                  <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    Guess the Animal!
                  </h1>
                </div>
                
                <div className="timer-bar bg-gray-200 rounded-full h-6 mb-6">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${(timer / difficultyLevels[difficulty].time) * 100}%` }}
                  ></div>
                </div>
  
                {currentAnimal && (
                  <div className="flex flex-col items-center">
                    <img 
                      src={currentAnimal.image} 
                      alt="Animal" 
                      className="w-64 h-64 object-cover rounded-2xl mb-6 shadow-lg hover:scale-105 transform transition-all duration-200"
                    />
                    <p className="text-2xl mb-6">
                      Unscramble: <span className="font-bold text-3xl text-purple-600">{currentAnimal.scrambled}</span>
                    </p>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                      <input
                        type="text"
                        value={guess}
                        onChange={handleChange}
                        placeholder="Type your answer..."
                        className="border-2 border-purple-300 rounded-full py-3 px-6 text-xl mb-4 w-full max-w-md focus:outline-none focus:border-purple-500 text-center"
                      />
                      <button 
                        type="submit" 
                        className="bg-gradient-to-r from-purple-400 to-pink-500 text-white text-xl py-3 px-12 rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg"
                      >
                        Check Answer! 🎯
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}
  
            {showCorrectModal && (
              <div className="modal">
                <div className="modal-content bg-white p-8 rounded-2xl shadow-xl text-center">
                  <h2 className="text-3xl font-bold text-green-500 mb-4">Amazing! 🎉</h2>
                  <button 
                    onClick={handleCloseCorrectModal}
                    className="bg-gradient-to-r from-green-400 to-green-500 text-white text-xl py-3 px-8 rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg"
                  >
                    Next Animal! →
                  </button>
                </div>
              </div>
            )}
  
            {showIncorrectModal && (
              <div className="modal">
                <div className="modal-content bg-white p-8 rounded-2xl shadow-xl text-center">
                  <h2 className="text-3xl font-bold text-red-500 mb-4">Oops! Try Again! 🤔</h2>
                  <button 
                    onClick={handleCloseIncorrectModal}
                    className="bg-gradient-to-r from-red-400 to-red-500 text-white text-xl py-3 px-8 rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg"
                  >
                    Try Again!
                  </button>
                </div>
              </div>
            )}
  
            {showTimeoutModal && (
              <div className="modal">
                <div className="modal-content bg-white p-8 rounded-2xl shadow-xl text-center">
                  <h2 className="text-3xl font-bold text-orange-500 mb-4">Time's Up! ⏰</h2>
                  <p className="text-xl text-gray-600">Let's try another animal!</p>
                </div>
              </div>
            )}
  
            {showConfetti && <Confetti />}
            
            {showFinalScoreModal && (
              <div className="modal">
                <div className="modal-content bg-white p-8 rounded-2xl shadow-xl text-center">
                  <h2 className="text-4xl font-bold text-purple-600 mb-6">Game Over! 🏆</h2>
                  <div className="space-y-4 mb-6">
                    <p className="text-2xl">Score: <span className="font-bold text-green-500">{score}</span></p>
                    <p className="text-2xl">Missed: <span className="font-bold text-red-500">{failedQuestions}</span></p>
                    <p className="text-2xl">Level: <span className="font-bold text-blue-500">
                      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </span></p>
                  </div>
                  <button 
                    onClick={() => window.location.reload()}
                    className="bg-gradient-to-r from-purple-400 to-pink-500 text-white text-xl py-3 px-8 rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg"
                  >
                    Play Again! 🎮
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
};

export default AnimalGame; 