import { useParams } from 'react-router-dom';
import { useState } from 'react';

const useMathsSettings = () => {
    const { id } = useParams();
    const bitLength = parseInt(id, 10);

    const answerNumber =
        bitLength >= 12 ? bitLength + 3 : Math.round(0.75 * bitLength + 6);

    const [randomNumbers, setRandomNumbers] = useState([]);
    const [randomBinaryNumbers, setRandomBinaryNumbers] = useState([]);
    const [randomSelection, setSelectedRandomSelection] = useState([]);

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [correctBinaryAnswer, setCorrectBinaryAnswer] = useState(null);
    const [binaryAnswerSpaced, setBinaryAnswerSpaced] = useState(null);

    const [gameOver, setGameOver] = useState(false);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [showNextButton, setShowNextButton] = useState(false);

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
