import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './MemoryGame.css'; // Import your styles

const icons = [
    '🌟', '🍀', '💧', '🔥', '🌈', '🌙', '⚡', '🍇',
    '🍎', '🍔', '🚗', '🎵', '🌻', '🍕', '💎', '🎨'
];

const MemoryGame = ({ setIsGameStarted }) => {
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
    const [showStats, setShowStats] = useState(false);

    // Hide the navbar when the game starts
    useEffect(() => {
        return () => setIsGameStarted(false); // Reset navbar visibility when the game ends
    }, [setIsGameStarted]);

    const startGame = (level, levelName) => {
        resetGame();
        generateCards(level);
        setDifficulty(levelName);
        setShowStats(true);
        setIsGameStarted(true); // Hide the navbar when the game starts
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
        setShowStats(false);
        setIsGameStarted(false); // Show the navbar when resetting the game
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
            <h1 className="text-4xl font-bold text-white mb-4">Memory Game</h1>
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
                        className={`w-36 h-36 flex items-center justify-center border-4 border-pink-400 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-110 ${
                            flippedCards.includes(index) || matchedCards.includes(index)
                                ? 'bg-white text-gray-800'
                                : 'bg-green-500 text-white'
                        }`}
                        onClick={() => flipCard(index)}
                    >
                        <span className="text-6xl">
                            {(flippedCards.includes(index) || matchedCards.includes(index)) && icon}
                        </span>
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
    );
};

export default MemoryGame;
