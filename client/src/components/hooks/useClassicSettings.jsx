import { useState } from 'react';
import { useParams } from 'react-router-dom';

const useClassicSettings = () => {
    // Retrieve the 'id' from URL params and parse it as an integer
    const { id } = useParams();
    const bitLength = parseInt(id, 10);

    // Calculate the number of buttons based on the bitLength
    const numberOfButtons =
        bitLength >= 12 ? bitLength + 4 : Math.round(0.75 * bitLength + 6);

    // Initialize state variables for random numbers and binary numbers
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [randomBinaryNumbers, setRandomBinaryNumbers] = useState([]);
    const [randomSelection, setSelectedRandomSelection] = useState([]);

    // Initialize state variables for selected answer and correctness
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    // Correct answer is always the first number in the random numbers list
    const correctAnswer = randomNumbers[0];

    // Initialize state variables for game control (e.g., next button, game over)
    const [showNextButton, setShowNextButton] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [disabledButtons, setDisabledButtons] = useState([]);

    // Return all necessary state and functions to be used in the component
    return {
        bitLength,
        numberOfButtons,
        randomNumbers,
        setRandomNumbers,
        randomBinaryNumbers,
        setRandomBinaryNumbers,
        randomSelection,
        setSelectedRandomSelection,
        selectedAnswer,
        setSelectedAnswer,
        isCorrect,
        setIsCorrect,
        gameOver,
        setGameOver,
        disabledButtons,
        setDisabledButtons,
        showNextButton,
        setShowNextButton,
        correctAnswer,
    };
};

export default useClassicSettings;
