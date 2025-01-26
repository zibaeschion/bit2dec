import useClassicSettings from '../hooks/useClassicSettings.jsx';
import { Fragment, useEffect } from 'react';
import RandomSelection from '../functions/GameModeFunctions/General/RandomSelection.jsx';
import generateRandomNumbersClassic from '../functions/GameModeFunctions/Classic/ClassicRandomNumberGenerator.jsx';
import AnswerChecker from '../functions/GameModeFunctions/General/checkAnswer.jsx';
import TutorialGameModeLayout from './TutorialGameModeLayout.jsx';
import { Typography } from '@mui/material';

export default function FourBitTutorial() {
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

    // Initialize random numbers and selection when component mounts
    useEffect(() => {
        generateRandomNumbers();
        generateRandomSelection();
    }, []);

    // Generate random numbers and update state
    const generateRandomNumbers = () => {
        generateRandomNumbersClassic(
            bitLength,
            setRandomNumbers,
            setRandomBinaryNumbers
        );
    };

    // Generate a random selection of numbers and update state
    const generateRandomSelection = () => {
        RandomSelection(numberOfButtons, setSelectedRandomSelection);
    };

    // Handle user answer selection and update game state accordingly
    const handleAnswerCheck = (answer) => {
        AnswerChecker(
            answer,
            correctAnswer,
            randomNumbers,
            gameOver,
            setSelectedAnswer,
            setIsCorrect,
            setGameOver,
            setDisabledButtons,
            setShowNextButton
        );
    };

    // Handle the "Next" button click, resetting the game state
    const handleNextClick = () => {
        setGameOver(false);
        setIsCorrect(false);
        setSelectedAnswer(null);
        setDisabledButtons([]);
        setShowNextButton(false);
        generateRandomNumbers();
        generateRandomSelection();
    };

    return (
        <TutorialGameModeLayout
            isCorrect={isCorrect}
            randomBinaryNumbers={randomBinaryNumbers}
            randomNumbers={randomNumbers}
            randomSelection={randomSelection}
            selectedAnswer={selectedAnswer}
            disabledButtons={disabledButtons}
            handleAnswerCheck={handleAnswerCheck}
            showNextButton={showNextButton}
            handleNextClick={handleNextClick}
        />
    );
}
