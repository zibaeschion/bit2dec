import { useParams } from 'react-router-dom';
import { useState } from 'react';

const useMathsSettings = () => {
    // Extracts the 'id' parameter from the URL (which corresponds to the bit length)
    const { id } = useParams();
    const bitLength = parseInt(id, 10); // Converts 'id' to a number (bit length)

    // Determines the number of answers based on the bit length (12 or more bits get 3 extra answers, otherwise a calculated value)
    const answerNumber =
        bitLength >= 12 ? bitLength + 3 : Math.round(0.75 * bitLength + 6);

    // States for storing game-related values
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [randomBinaryNumbers, setRandomBinaryNumbers] = useState([]);
    const [randomSelection, setSelectedRandomSelection] = useState([]);

    // States for managing answers and correctness
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [correctBinaryAnswer, setCorrectBinaryAnswer] = useState(null);
    const [binaryAnswerSpaced, setBinaryAnswerSpaced] = useState(null);

    // States for managing game progress and UI
    const [gameOver, setGameOver] = useState(false);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [showNextButton, setShowNextButton] = useState(false);

    // Returns all state variables and setters for use in the game component
    return {
        bitLength,
        answerNumber,
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
        setCorrectAnswer,
        correctBinaryAnswer,
        setCorrectBinaryAnswer,
        binaryAnswerSpaced,
        setBinaryAnswerSpaced,
    };
};

export default useMathsSettings;
