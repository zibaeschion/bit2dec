import React, { useEffect, useState } from 'react';
import generateRandomNumbersClassic from '../functions/GameModeFunctions/Classic/ClassicRandomNumberGenerator.jsx';
import checkAnswerTimeMode from '../functions/GameModeFunctions/TimeMode/CheckAnswerTimeMode.jsx';
import TimeModeLayout from '../functions/GameModeFunctions/Layouts/TimeModeLayout.jsx';
import useClassicSettings from '../hooks/useClassicSettings.jsx';
import useTimer from '../hooks/useTimer.jsx';
import RandomSelection from '../functions/GameModeFunctions/General/RandomSelection.jsx';
import { useUser } from '../UserContext';

const TimeMode = () => {
    // Retrieve game state and settings using custom hook
    const {
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
    } = useClassicSettings();

    // Username of the longed in user
    const { username } = useUser();

    // Local state variables for tracking game progress
    const [showRestartButton, setShowRestartButton] = useState(false);
    const [correctClicks, setCorrectClicks] = useState(0);
    const [incorrectClicks, setIncorrectClicks] = useState(0);
    const [score, setScore] = useState(0);

    const initialTime = 5; // Initial countdown time in seconds

    // Initialize and manage the game timer using a custom hook
    const { time, setTimer } = useTimer(
        initialTime,
        setGameOver,
        setDisabledButtons,
        setShowRestartButton,
        setShowNextButton,
        numberOfButtons,
        username,
        correctClicks,
        incorrectClicks,
        bitLength,
        score,
        setScore
    );

    // Generate random numbers and selections when component mounts
    useEffect(() => {
        generateRandomNumbers();
        generateRandomSelection();
    }, []);

    // Function to generate random numbers and update state
    const generateRandomNumbers = () => {
        generateRandomNumbersClassic(
            bitLength,
            setRandomNumbers,
            setRandomBinaryNumbers
        );
    };

    // Function to generate a random selection of numbers and update state
    const generateRandomSelection = () => {
        RandomSelection(numberOfButtons, setSelectedRandomSelection);
    };

    // Handle answer checking and update the game state accordingly
    const handleAnswerCheck = (answer, index) => {
        checkAnswerTimeMode(
            answer,
            index,
            gameOver,
            setSelectedAnswer,
            correctAnswer,
            setIsCorrect,
            setCorrectClicks,
            setIncorrectClicks,
            setDisabledButtons,
            randomNumbers,
            setShowNextButton
        );
    };

    // Handle the "Next" button click, resetting parts of the game state
    const handleNextClick = () => {
        setGameOver(false);
        setIsCorrect(false);
        setSelectedAnswer(null);
        setDisabledButtons([]);
        setShowNextButton(false);
        generateRandomNumbers();
        generateRandomSelection();
    };

    // Handle the "Restart" button click, resetting the entire game state
    const handleRestartButtonClick = () => {
        setGameOver(false);
        setIsCorrect(false);
        setSelectedAnswer(null);
        setDisabledButtons([]);
        setShowRestartButton(false);
        generateRandomNumbers();
        generateRandomSelection();
        setTimer(initialTime);
        setCorrectClicks(0);
        setIncorrectClicks(0);
    };

    // renders the website; and hands over the correct props
    return (
        <TimeModeLayout
            timer={time}
            gameOver={gameOver}
            isCorrect={isCorrect}
            selectedAnswer={selectedAnswer}
            randomBinaryNumbers={randomBinaryNumbers}
            randomNumbers={randomNumbers}
            randomSelection={randomSelection}
            correctClicks={correctClicks}
            incorrectClicks={incorrectClicks}
            disabledButtons={disabledButtons}
            showRestartButton={showRestartButton}
            handleAnswerCheck={handleAnswerCheck}
            handleRestartButtonClick={handleRestartButtonClick}
            score={score}
            showNextButton={showNextButton}
            handleNextClick={handleNextClick}
        />
    );
};

export default TimeMode;
