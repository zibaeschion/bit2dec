import { Box, Button, Collapse, Grid2, Stack, Switch, Typography, useMediaQuery } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";

export default function ClassicGameModeLayout(props) {
    const {
        isCorrect,
        randomBinaryNumbers,
        randomNumbers,
        randomSelection,
        selectedAnswer,
        disabledButtons,
        handleAnswerCheck,
        showNextButton,
        handleNextClick,
    } = props;

    // Detects dark mode preference
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const yellow = prefersDarkMode ? '#ffc700' : '#c29b01';

    // State for hint visibility and solution steps
    const [solutionShown, setSolutionShown] = useState(false);
    const [rowRevealed, setRowRevealed] = useState([false, false]);
    const [helpNeeded, setHelpNeeded] = useState(false);
    const [processRevealed, setProcessRevealed] = useState(0);

    // Function to gradually reveal the solution step by step
    const revealSolution = (rowIndex) => {
        if (rowIndex < rowRevealed.length) {
            const timeout = rowIndex === 0 ? 200 : 5000;
            setProcessRevealed(setTimeout(() => {
                const newRevealed = [false, false];
                if (solutionShown) {
                    for (let i = 0; i <= rowIndex; i++) {
                        newRevealed[i] = true;
                    }
                    setRowRevealed(newRevealed);
                    revealSolution(rowIndex + 1);
                } else {
                    setRowRevealed(newRevealed);
                }
            }, timeout));
        }
    };

    useEffect(() => {
        if (solutionShown) {
            revealSolution(0);
        } else {
            clearTimeout(processRevealed);
            setRowRevealed([false, false]);
        }
    }, [solutionShown]);

    useEffect(() => {
        setSolutionShown(false);
        setHelpNeeded(false);
        if (!showNextButton) {
            setTimeout(() => {
                setHelpNeeded(true);
            }, 10000);
        }
    }, [showNextButton]);

    return (
        <Box className={"gameContainer"}>
            <Typography variant="h4" className={"gameMessage"}>
                {isCorrect ? 'Correct!' : 'Which number is the correct result?'}
            </Typography>

            {/* Hint section */}
            <Collapse in={helpNeeded}>
                <Stack spacing={0} className={"mathsStack"}>
                    <Typography variant="body1"> Hints </Typography>
                    <Switch checked={solutionShown} disabled={!rowRevealed[3] && solutionShown}
                            onClick={() => setSolutionShown(!solutionShown)}></Switch>
                </Stack>
            </Collapse>

            {/* Display binary calculation steps */}
            <Grid2 columns={12} container spacing={0} width={solutionShown ? "70%" : "40%"}>
                <Grid2 size={1}/>
                <Grid2 size={11}>
                        <Typography variant="h4" className={"mathsHintGridTypo"} color={yellow}>
                            {`${randomBinaryNumbers[0]}`}
                        </Typography>
                </Grid2>

                <Grid2 size={!rowRevealed[0] ? 1 : 0}>
                    <Collapse in={!rowRevealed[0]}>
                        <Typography variant="h4" className={"mathsHintGridTypo"}>
                            =
                        </Typography>
                    </Collapse>
                </Grid2>
                <Grid2 size={!rowRevealed[0] ? 11 : 0}>
                    <Collapse in={!rowRevealed[0]}>
                        <Typography variant="h4" className={"mathsHintGridTypo"}>
                            {isCorrect ? `${randomNumbers[0]}` : `?`}
                        </Typography>
                    </Collapse>
                </Grid2>

                {/* Equality sign */}
                <Grid2 size={1}>
                    <Collapse in={rowRevealed[0]}>
                        <Typography variant="h4" className={"mathsHintGridTypo"}>
                            =
                        </Typography>
                    </Collapse>
                </Grid2>

                {/* Display calculation steps for binary conversion */}
                {randomBinaryNumbers[0] && Array.from(randomBinaryNumbers[0].replace(/\s/g, '')).map((bit, bitIndex) => {
                    const bitPower = randomBinaryNumbers[0].replace(/\s/g, '').length - 1 - bitIndex;
                    const result = bit === "1" ? Math.pow(2, bitPower) : 0;

                    return (
                        <Fragment key={`result-${bitIndex}`}>
                            {/* Display calculated value */}
                            <Grid2 size={solutionShown ? 2 : 11}>
                                <Collapse in={rowRevealed[0]}>
                                    <Typography variant="h4" className={"mathsHintGridTypo"}>
                                        {`${result}`}
                                    </Typography>
                                </Collapse>
                            </Grid2>

                            {/* Show plus signs between values */}
                            {bitIndex < randomBinaryNumbers[0].replace(/\s/g, '').length - 1 && (
                                <Grid2 size={1}>
                                    <Collapse in={rowRevealed[0]}>
                                        <Typography variant="h4" className={"mathsHintGridTypo"}>
                                            +
                                        </Typography>
                                    </Collapse>
                                </Grid2>
                            )}
                        </Fragment>
                    );
                })}
            </Grid2>
            {/* a new grid with the same setting as the one above; needed to separate the solution one line under all
            the decimals creating a nicer visual */}
            <Grid2 columns={12} container spacing={0} width={solutionShown ? "70%" : "40%"}>
                {/* Equality sign */}
                <Grid2 size={1}>
                    <Collapse in={rowRevealed[1]}>
                        <Typography variant="h4" className={"mathsHintGridTypo"}>
                            =
                        </Typography>
                    </Collapse>
                </Grid2>

                {/* the solution but as decimal */}
                <Grid2 size={11}>
                    <Collapse in={rowRevealed[1]}>
                        <Typography variant="h4" className={"mathsHintGridTypo"}>
                            {randomNumbers[0]}
                        </Typography>
                    </Collapse>
                </Grid2>
            </Grid2>

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
                            ${isSelected ? (isCorrect ? 'selected correct' : 'selected incorrect') : (isDisabled ? 'disabled' : 'default')}`}
                            onClick={() => handleAnswerCheck(currentNumber)}
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
        </Box>
    );
}
