import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './MemoryGame.css'; // Import a separate CSS file for styles
// import img from "../../images/games/arrow.png";
import img1 from "../../images/games/load.png";
import img2 from "../../images/games/cbl.png";
import img3 from "../../images/games/robot.png";
import img4 from "../../images/games/bg.png";
import  logo  from "../../images/footer/logo.png";
import img5 from "../../images/games/memory.png";
import  img6 from "../../images/games/mct.png";
import img7 from "../../images/games/letters.png"

const icons = [
    '🌟', '🍀', '💧', '🔥', '🌈', '🌙', '⚡', '🍇',
    '🍎', '🍔', '🚗', '🎵', '🌻', '🍕', '💎', '🎨'
];

const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [flipCount, setFlipCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    const [gridCols, setGridCols] = useState('grid-cols-2');
    const [difficulty, setDifficulty] = useState('');
    const [showStats, setShowStats] = useState(false); // Only show stats after difficulty is chosen
    const [gameStarted, setGameStarted] = useState(false); // To track if the game has started
    const [isLoading, setIsLoading] = useState(true); // To handle loading state

    // Simulate loading before showing the play button
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // After loading, hide the loading screen
        }, 2000); // 2-second delay
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
            setGridCols('grid-cols-4');
        } else if (level === 16) {
            setGridCols('grid-cols-4');
        } else if (level === 32) {
            setGridCols('grid-cols-8');
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
                    <p className="text-4xl text-white">Loading...</p>
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
        className="relative top-0 mb-8 z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        style={{ filter: 'brightness(100%)' }} 
    />
    <img 
        src={img6} 
        alt="match" 
        className="w-full h-auto ml-5 sm:ml-10 md:ml-16 lg:ml-20 z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        style={{ filter: 'brightness(100%)' }}
    />
    <img 
        src={img7} 
        alt="letters" 
        className="w-full h-auto mt-4 z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        style={{ filter: 'brightness(100%)' }} 
    />
                  
                  <button
        onClick={() => setGameStarted(true)}
        className="text-white text-3xl transform hover:scale-110 transition-all w-[80%] h-[4rem] mb-8 -translate-y-12"
    >
         <img 
        src={img1} 
        alt="Play Button" 
        className="w-16 h-16 inline-block mr-2 w-[40%] h-[20.4vh]" 
    />
       
    </button>
                </div>
            ) : (
                <div>
                    <h1 className="text-4xl font-bold text-white mb-4">Choose Level</h1>
                    <div className="mb-4">
                        {Object.keys(difficultyLevels).map((level) => (
                            <button
                                key={level}
                                onClick={() => startGame(difficultyLevels[level], level)}
                                className="px-6 py-3 mx-2 text-white bg-purple-500 rounded-full hover:bg-purple-600 transition-transform transform hover:scale-105"
                            >
                                {level.charAt(0).toUpperCase() + level.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className={`grid ${gridCols} gap-4`}>
                        {cards.map((icon, index) => (
                            <div
                                key={index}
                                className={`w-28 h-28 flex items-center justify-center border-4 border-pink-400 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 ${
                                    flippedCards.includes(index) || matchedCards.includes(index)
                                        ? 'bg-white text-gray-800'
                                        : 'bg-green-500 text-white'
                                }`}
                                onClick={() => flipCard(index)}
                            >
                                {(flippedCards.includes(index) || matchedCards.includes(index)) && icon}
                            </div>
                        ))}
                    </div>
                    {showStats && (
                        <div className="mt-4 text-white text-xl">
                            <p>Flips: {flipCount}</p>
                            <p>Time: {timer} seconds</p>
                        </div>
                    )}
                    {gameOver && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center relative z-50">
                                <h2 className="text-lg font-bold mb-4">Congratulations!</h2>
                                <p>You completed the game!</p>
                                <p>Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</p>
                                <p>Time: {timer} seconds</p>
                                <p>Flips: {flipCount}</p>
                                <img
                                    src="https://img.icons8.com/color/480/gold-medal.png"
                                    alt="Medal"
                                    className="mx-auto my-4 w-16"
                                />
                                <button
                                    onClick={() => resetGame()}
                                    className="px-4 py-2 mt-2 text-white bg-red-500 rounded-full hover:bg-red-600"
                                >
                                    Restart Game
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
