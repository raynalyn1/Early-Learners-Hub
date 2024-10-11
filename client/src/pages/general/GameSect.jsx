import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import memory from '../../images/games/MemoryGames.png';
import math from '../../images/games/MathCardGames.png';
import img12 from '../../images/games/WordGames.png';
import Footer from '../../components/Footer';

const GameSect = () => {
    const navigate = useNavigate();

    // State to handle button click effects
    const [clicked, setClicked] = useState(null);

    const handleMemoryGames = () => {
        setClicked('memory');
        navigate('/MemoryGames');
    };

    const handleMathGames = () => {
        setClicked('math');
        navigate('/MathGames');
    };

    const handleWordGames = () => {
        setClicked('word');
        navigate('/WordGames');
    };

    return (
        <div>
            <div className="bg-[#EB9721] w-full px-5 relative">
                <div className="bg-[#F0BC78] w-full px-5 py-10">
                    <h1 className="text-2xl font-semibold  mb-9 text-start">Educational Games</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
                        {/* Memory Game Card */}
                        <div className="bg-[#F3CA79] rounded-lg shadow-lg p-5">
                            <img src={memory} alt="Memory Games" className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl font-bold mb-2">Animal Puzzles</h2>
                            <p className="text-gray-600 mb-4">Match the animal shapes to their shadows.</p>
                            <button
                                onClick={handleMemoryGames}
                                className={`${
                                    clicked === 'memory' ? 'bg-orange-600' : 'bg-orange-500'
                                } text-white py-2 px-4 rounded hover:bg-orange-600 active:scale-95 transition-transform`}
                            >
                                Play
                            </button>
                        </div>

                        {/* Math Game Card */}
                        <div className="bg-[#F3CA79] rounded-lg shadow-lg p-5">
                            <img src={math} alt="Math Games" className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl font-bold mb-2">Number Matching Game</h2>
                            <p className="text-gray-600 mb-4">Match the number with the cards that have the same number of dots.</p>
                            <button
                                onClick={handleMathGames}
                                className={`${
                                    clicked === 'math' ? 'bg-orange-600' : 'bg-orange-500'
                                } text-white py-2 px-4 rounded hover:bg-orange-600 active:scale-95 transition-transform`}
                            >
                                Play
                            </button>
                        </div>

                        {/* Word Game Card */}
                        <div className="bg-[#F3CA79] rounded-lg shadow-lg p-5">
                            <img src={img12} alt="Word Games" className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl font-bold mb-2">Alphabet Adventure</h2>
                            <p className="text-gray-600 mb-4">Learn the alphabet with fun and interactive exercises.</p>
                            <button
                                onClick={handleWordGames}
                                className={`${
                                    clicked === 'word' ? 'bg-orange-600' : 'bg-orange-500'
                                } text-white py-2 px-4 rounded hover:bg-orange-600 active:scale-95 transition-transform`}
                            >
                                Play
                            </button>
                        </div>

                        {/* More game cards as needed */}
                        <div className="bg-[#F3CA79] rounded-lg shadow-lg p-5">
                            <img src={memory} alt="Counting Fun" className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl font-bold mb-2">Counting Fun</h2>
                            <p className="text-gray-600 mb-4">Count objects and learn numbers in a playful way.</p>
                            <button
                                onClick={handleMemoryGames}
                                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-[#EBCEA8] active:scale-95 transition-transform"
                            >
                                Play
                            </button>
                        </div>

                        <div className="bg-[#F3CA79] rounded-lg shadow-lg p-5">
                            <img src={math} alt="Shape Sorter" className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl font-bold mb-2">Shape Sorter</h2>
                            <p className="text-gray-600 mb-4">Drag and drop shapes to their corresponding slots.</p>
                            <button
                                onClick={handleMathGames}
                                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-white-600 active:scale-95 transition-transform"
                            >
                                Play
                            </button>
                        </div>

                        <div className="bg-[#F3CA79] rounded-lg shadow-lg p-5">
                            <img src={img12} alt="Musical Notes" className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl font-bold mb-2">Musical Notes</h2>
                            <p className="text-gray-600 mb-4">Learn about musical notes and instruments through play.</p>
                            <button
                                onClick={handleWordGames}
                                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 active:scale-95 transition-transform"
                            >
                                Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GameSect;
