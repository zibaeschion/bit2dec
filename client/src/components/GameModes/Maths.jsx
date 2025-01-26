import { useEffect } from 'react';
import RandomNumberGenerator from '../functions/GameModeFunctions/Maths/RandomNumberGenerator.jsx';
import AnswerChecker from '../functions/GameModeFunctions/General/checkAnswer.jsx';
import MathsGameModeLayout from '../functions/GameModeFunctions/Layouts/MathsGameModeLayout.jsx';
import useMathsSettings from '../hooks/useMathsSettings.jsx';
import RandomSelection from '../functions/GameModeFunctions/General/RandomSelection.jsx';

const Maths = () => {
    // Retrieve game state and settings using custom hook
    const {
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
    } = useMathsSettings();

    // generates the Numbers for the quiz as well as shuffles them when entering the site
    useEffect(() => {
        generateRandomNumber();
        generateSelection();
    }, []);

    // fills in the needed constants as props
    const generateRandomNumber = () => {
        RandomNumberGenerator(
            answerNumber,
            bitLength,
            setRandomBinaryNumbers,
            setRandomNumbers,
            setCorrectAnswer,
            setCorrectBinaryAnswer
        );
    };

    // fills in the needed constants as props
    const generateSelection = () => {
        RandomSelection(answerNumber, setSelectedRandomSelection);
    };

    // check if the answer is correct
    const checkAnswer = (answer) => {
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

    // sets everything to the default values and generates new Numbers and shuffles them
    const handleNextClick = () => {
        setGameOver(false);
        setIsCorrect(false);
        setSelectedAnswer(null);
        setDisabledButtons([]);
        setShowNextButton(false);
        generateRandomNumber();
        generateSelection();
    };

    // if the creation of the binaryAnswer should take too long it renderns a "Loading..." as the MathsGameModeLayout
    // needs it. Without this statement we would get an error as it tries to render the site at the same time as it tries
    // to calculate the correctBinaryAnswer
    if (!correctBinaryAnswer) {
        return <div>Loading...</div>;
    }

    // renders the website; and hands over the correct props
    return (
        <MathsGameModeLayout
            isCorrect={isCorrect}
            randomBinaryNumbers={randomBinaryNumbers}
            randomNumbers={randomNumbers}
            correctBinaryAnswer={correctBinaryAnswer}
            randomSelection={randomSelection}
            selectedAnswer={selectedAnswer}
            disabledButtons={disabledButtons}
            checkAnswer={checkAnswer}
            showNextButton={showNextButton}
            handleNextClick={handleNextClick}
            correctAnswer={correctAnswer}
        />
    );
};

export default Maths;
