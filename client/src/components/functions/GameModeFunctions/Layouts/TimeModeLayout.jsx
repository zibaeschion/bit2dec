import { Box, Button, Typography } from "@mui/material";
import FinalMessage from "../TimeMode/FinalMessage.jsx";

const TimeModeLayout = ({
                            timer,
                            gameOver,
                            isCorrect,
                            selectedAnswer,
                            randomBinaryNumbers,
                            randomNumbers,
                            randomSelection,
                            correctClicks,
                            incorrectClicks,
                            disabledButtons,
                            showRestartButton,
                            handleAnswerCheck,
                            handleRestartButtonClick,
                            score,
                            showNextButton,
                            handleNextClick
                        }) => {
    return (
        <Box className={"gameContainer"}>
            {/* Display the countdown timer */}
            <Typography variant="h6" className={"timer"}>
                {timer}
            </Typography>

            {/* Show game message depending on game state */}
            <Typography variant="h4" className={"gameMessage"}>
                {gameOver
                    ? FinalMessage(correctClicks, incorrectClicks)
                    : (isCorrect
                            ? 'Correct!'
                            : !isCorrect && selectedAnswer !== null
                                ? 'Wrong!'
                                : 'Which number is the correct result?'
                    )
                }
            </Typography>

            {/* Display the current question or final score when the game is over */}
            <Typography variant="h5" className={"gameTask"}>
                {gameOver
                    ? "Score: " + score
                    : (selectedAnswer !== null
                        ? `${randomBinaryNumbers[0]} = ${randomNumbers[0]}`
                        : `${randomBinaryNumbers[0]} = ?`)
                }
            </Typography>

            {/* Show correct and incorrect answer counts */}
            <Typography variant="h6" className={"gameAnswerCounter"}>
                Correct Answers: {correctClicks} | Incorrect Answers: {incorrectClicks}
            </Typography>

            {/* Answer selection buttons */}
            <Box className={"gameButtonsContainer"}>
                {randomSelection.map((index) => {
                    const currentNumber = randomNumbers[index];
                    const isSelected = selectedAnswer === currentNumber;
                    const isDisabled = disabledButtons[index];

                    return (
                        <Button
                            key={index}
                            className={`gameButton 
                                ${isSelected
                                ? (isCorrect ? 'selected correct' : 'selected incorrect')
                                : (isDisabled ? 'disabled' : 'default')
                            }`}
                            onClick={() => {
                                handleAnswerCheck(currentNumber, index);
                            }}
                            disabled={isDisabled}
                        >
                            {currentNumber}
                        </Button>
                    );
                })}
            </Box>

            {/* Button to proceed to the next task */}
            <Button
                className={`restartButton 
                    ${showNextButton ? 'visible' : ''}`}
                onClick={handleNextClick}
            >
                Next
            </Button>

            {/* Restart button to reset the game */}
            <Button
                className={`restartButton 
                    ${showRestartButton ? 'visible' : ''}`}
                onClick={() => {
                    handleRestartButtonClick();
                }}
            >
                Restart
            </Button>
        </Box>
    );
};

export default TimeModeLayout;
