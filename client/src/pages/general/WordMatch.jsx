// // src/WordMatch.js
// import React, { useState, useEffect } from 'react';
// import bg from "../../images/games/WordGames.png";
// import loading from "../../images/games/loading.gif";

// const wordsAndImages = [
//     { word: 'Cat', image: 'https://img.icons8.com/color/96/000000/cat.png' },
//     { word: 'Dog', image: 'https://img.icons8.com/color/96/000000/dog.png' },
//     { word: 'Apple', image: 'https://img.icons8.com/color/96/000000/apple.png' },
//     { word: 'Banana', image: 'https://img.icons8.com/color/96/000000/banana.png' },
//     { word: 'Fish', image: 'https://img.icons8.com/color/96/000000/fish.png' },
//     { word: 'Frog', image: 'https://img.icons8.com/color/96/000000/frog.png' },
//     { word: 'Car', image: 'https://img.icons8.com/color/96/000000/car.png' },
//     { word: 'Bird', image: 'https://img.icons8.com/color/96/000000/bird.png' },
//     { word: 'Flower', image: 'https://img.icons8.com/color/96/000000/flower.png' },
//     { word: 'Tree', image: 'https://img.freepik.com/free-vector/cute-cartoon-tree-character_1308-19968.jpg' },
//     { word: 'Sun', image: 'https://img.icons8.com/color/96/000000/sun.png' },
//     { word: 'Moon', image: 'https://img.icons8.com/color/96/000000/moon.png' },
//     { word: 'Bear', image: 'https://img.icons8.com/color/96/000000/bear.png' },
//     { word: 'Elephant', image: 'https://img.icons8.com/color/96/000000/elephant.png' },
//     { word: 'Giraffe', image: 'https://img.icons8.com/color/96/000000/giraffe.png' },
// ];

// const WordMatch = () => {
//     const [currentWord, setCurrentWord] = useState('');
//     const [options, setOptions] = useState([]);
//     const [correctMatches, setCorrectMatches] = useState([]);
//     const [modalVisible, setModalVisible] = useState(false);
//     const [modalMessage, setModalMessage] = useState('');
//     const [gameStarted, setGameStarted] = useState(false);
//     const [achievementVisible, setAchievementVisible] = useState(false);
//     const [questionIndex, setQuestionIndex] = useState(0); 
//     const [isLoading, setIsLoading] = useState(true); 

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsLoading(false); 
//         }, 1000); 
//         return () => clearTimeout(timer);
//     }, []);

//     useEffect(() => {
//         if (gameStarted) {
//             generateQuestion();
//         }
//     }, [gameStarted, questionIndex]);

//     const generateQuestion = () => {
//         const selectedWord = wordsAndImages[questionIndex];
//         const otherWords = wordsAndImages.filter((item) => item.word !== selectedWord.word);
//         const randomOptions = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);
//         setOptions([selectedWord, ...randomOptions].sort(() => 0.5 - Math.random()));
//         setCurrentWord(selectedWord.word);
//     };

//     const handleOptionClick = (word) => {
//         if (word === currentWord) {
//             const updatedCorrectMatches = [...correctMatches, word];
//             setCorrectMatches(updatedCorrectMatches);
//             setModalMessage('Correct match!');

//             if (updatedCorrectMatches.length === wordsAndImages.length - 1) {
//                 setAchievementVisible(true);
//                 setGameStarted(false);
//             } else {
//                 setQuestionIndex((prevIndex) => prevIndex + 1);
//                 showModal(); 
//             }
//         } else {
//             setModalMessage('Try again!');
//             showModal(); 
//         }
//     };

//     const showModal = () => {
//         setModalVisible(true);
//         setTimeout(() => {
//             setModalVisible(false);
//         }, 1000); 
//     };

//     const startGame = () => {
//         setCorrectMatches([]); 
//         setQuestionIndex(0); 
//         setGameStarted(true);
//         setModalMessage(''); 
//     };

//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-200 to-blue-300">
//             {isLoading ? (
//                 <div className="flex items-center justify-center h-screen relative">
//                     <img 
//                         src={bg} 
//                         alt="bg" 
//                         className="absolute  object-cover opacity-90" 
//                     />
//                     <img 
//                         src={loading} 
//                         alt="loading" 
//                         className="" 
//                         style={{ filter: 'brightness(100%)' }} 
//                     />
//                 </div>
//             ) : (
//                 !gameStarted ? (
//                     <div className="text-center">
//                         <h1 className="text-5xl font-extrabold mb-4 text-purple-600">Welcome to the Word Match Game!</h1>
//                         <p className="mb-4 text-xl text-gray-800">Click the button below to start the game.</p>
//                         <button
//                             onClick={startGame}
//                             className="px-8 py-4 text-2xl font-bold text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-200"
//                         >
//                             Start Game
//                         </button>
//                     </div>
//                 ) : (
//                     <div className="w-full max-w-lg mx-auto text-center">
//                         <h1 className="text-5xl font-extrabold mb-6 text-purple-600">Word Match Game</h1>
//                         <div className="mb-4">
//                             <img src={wordsAndImages[questionIndex]?.image} alt={currentWord} className="w-40 h-40 mb-6 mx-auto rounded-lg shadow-lg" />
//                         </div>
//                         <div className="flex flex-wrap justify-center mb-6">
//                             {options.map((option) => (
//                                 <button
//                                     key={option.word}
//                                     className={`m-2 px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-200`}
//                                     onClick={() => handleOptionClick(option.word)}
//                                 >
//                                     {option.word}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 )
//             )}

//             {modalVisible && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 transition-opacity duration-300">
//                     <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 scale-100 hover:scale-105">
//                         <h2 className="text-2xl font-bold mb-4 text-center text-purple-600">{modalMessage}</h2>
//                     </div>
//                 </div>
//             )}

//             {achievementVisible && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 transition-opacity duration-300">
//                     <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 scale-100 hover:scale-105">
//                         <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Congratulations!</h2>
//                         <p className="text-lg text-center">You've matched all the words!</p>
//                         <button
//                             className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-200"
//                             onClick={() => {
//                                 setAchievementVisible(false);
//                                 startGame();
//                             }}
//                         >
//                             Play Again
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default WordMatch;
