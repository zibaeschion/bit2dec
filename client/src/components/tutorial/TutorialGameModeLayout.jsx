import {
    Box,
    Button,
    Collapse,
    Grid2,
    Stack,
    Switch,
    Typography,
    useMediaQuery,
} from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';

export default function TutorialGameModeLayout(props) {
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
            setProcessRevealed(
                setTimeout(() => {
                    const newRevealed = [false, false, false, false];
                    if (solutionShown) {
                        for (let i = 0; i <= rowIndex; i++) {
                            newRevealed[i] = true;
                        }
                        setRowRevealed(newRevealed);
                        revealSolution(rowIndex + 1);
                    } else {
                        setRowRevealed(newRevealed);
                    }
                }, timeout)
            );
        }
    };

    useEffect(() => {
        if (solutionShown) {
            revealSolution(0);
        } else {
            clearTimeout(processRevealed);
            setRowRevealed([false, false, false, false]);
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
        <Box className={'gameContainer'}>
            <Typography variant="h1">Tutorial</Typography>
            <Typography variant="h4" className={'gameMessage'}>
                {isCorrect ? 'Correct!' : 'Which number is the correct result?'}
            </Typography>

            {/* Hint section */}
            <Collapse in={helpNeeded}>
                <Stack spacing={0} className={'mathsStack'}>
                    <Typography variant="body1"> Hints </Typography>
                    <Switch
                        checked={solutionShown}
                        disabled={!rowRevealed[3] && solutionShown}
                        onClick={() => setSolutionShown(!solutionShown)}
                    ></Switch>
                </Stack>
            </Collapse>

            {/* Display binary calculation steps */}
            <Grid2
                columns={12}
                container
                spacing={0}
                width={solutionShown ? '70%' : '40%'}
            >
                <Grid2 size={1} />
                <Grid2 size={11}>
                    <Typography
                        variant="h4"
                        className={'mathsHintGridTypo'}
                        color={yellow}
                    >
                        {`${randomBinaryNumbers[0]}`}
                    </Typography>
                </Grid2>

                <Grid2 size={!rowRevealed[0] ? 1 : 0}>
                    <Collapse in={!rowRevealed[0]}>
                        <Typography
                            variant="h4"
                            className={'mathsHintGridTypo'}
                        >
                            =
                        </Typography>
                    </Collapse>
                </Grid2>
                <Grid2 size={!rowRevealed[0] ? 11 : 0}>
                    <Collapse in={!rowRevealed[0]}>
                        <Typography
                            variant="h4"
                            className={'mathsHintGridTypo'}
                        >
                            {isCorrect ? `${randomNumbers[0]}` : `?`}
                        </Typography>
                    </Collapse>
                </Grid2>

                {/* Equality sign */}
                <Grid2 size={1}>
                    <Collapse in={rowRevealed[0]}>
                        <Typography
                            variant="h4"
                            className={'mathsHintGridTypo'}
                        >
                            =
                        </Typography>
                    </Collapse>
                </Grid2>

                {['000', '00', '0', ''].map((zeros, index) => {
                    return (
                        <Fragment>
                            <Grid2 size={2}>
                                <Collapse in={rowRevealed[0]}>
                                    <Typography
                                        variant="h4"
                                        sx={{ marginBottom: '2rem' }}
                                        color={yellow}
                                        align="center"
                                    >
                                        {typeof randomBinaryNumbers[0] ===
                                            'string' &&
                                        randomBinaryNumbers[0].at(index) === '1'
                                            ? '1' + zeros
                                            : '0' + zeros}
                                    </Typography>
                                </Collapse>
                            </Grid2>
                            {index < 3 && (
                                <Grid2 size={1}>
                                    <Collapse in={rowRevealed[0]}>
                                        <Typography
                                            variant="h4"
                                            sx={{ marginBottom: '2rem' }}
                                            align="center"
                                        >
                                            +
                                        </Typography>
                                    </Collapse>
                                </Grid2>
                            )}
                        </Fragment>
                    );
                })}
                {/* Equality sign */}
                <Grid2 size={1}>
                    <Collapse in={rowRevealed[0]}>
                        <Typography
                            variant="h4"
                            sx={{ marginBottom: '2rem' }}
                            align="center"
                        >
                            =
                        </Typography>
                    </Collapse>
                </Grid2>

                {['3', '2', '1', '0'].map((exponent, index) => {
                    return (
                        <Fragment>
                            <Grid2 size={2}>
                                <Collapse in={rowRevealed[1]}>
                                    <Typography
                                        variant="h4"
                                        sx={{ marginBottom: '2rem' }}
                                        align="center"
                                    >
                                        {typeof randomBinaryNumbers[0] ===
                                            'string' &&
                                        randomBinaryNumbers[0].at(index) === '1'
                                            ? '1'
                                            : '0'}
                                        •2<sup>{exponent}</sup>
                                    </Typography>
                                </Collapse>
                            </Grid2>
                            {index < 3 && (
                                <Grid2 size={1}>
                                    <Collapse in={rowRevealed[1]}>
                                        <Typography
                                            variant="h4"
                                            sx={{ marginBottom: '2rem' }}
                                            align="center"
                                        >
                                            +
                                        </Typography>
                                    </Collapse>
                                </Grid2>
                            )}
                        </Fragment>
                    );
                })}
                {/* Equality sign */}
                <Grid2 size={1}>
                    <Collapse in={rowRevealed[1]}>
                        <Typography
                            variant="h4"
                            sx={{ marginBottom: '2rem' }}
                            align="center"
                        >
                            =
                        </Typography>
                    </Collapse>
                </Grid2>

                {['8', '4', '2', '1'].map((potency, index) => {
                    return (
                        <Fragment>
                            <Grid2 size={2}>
                                <Collapse in={rowRevealed[2]}>
                                    <Typography
                                        variant="h4"
                                        sx={{ marginBottom: '2rem' }}
                                        align="center"
                                    >
                                        {typeof randomBinaryNumbers[0] ===
                                            'string' &&
                                        randomBinaryNumbers[0].at(index) === '1'
                                            ? potency
                                            : '0'}
                                    </Typography>
                                </Collapse>
                            </Grid2>
                            {index < 3 && (
                                <Grid2 size={1}>
                                    <Collapse in={rowRevealed[2]}>
                                        <Typography
                                            variant="h4"
                                            sx={{ marginBottom: '2rem' }}
                                            align="center"
                                        >
                                            +
                                        </Typography>
                                    </Collapse>
                                </Grid2>
                            )}
                        </Fragment>
                    );
                })}
                {/* Equality sign */}
                <Grid2 size={1}>
                    <Collapse in={rowRevealed[2]}>
                        <Typography
                            variant="h4"
                            className={'mathsHintGridTypo'}
                        >
                            =
                        </Typography>
                    </Collapse>
                </Grid2>

                {/* the solution but as decimal */}
                <Grid2 size={11}>
                    <Collapse in={rowRevealed[3]}>
                        <Typography
                            variant="h4"
                            className={'mathsHintGridTypo'}
                        >
                            {randomNumbers[0]}
                        </Typography>
                    </Collapse>
                </Grid2>
            </Grid2>

            {/* Answer selection buttons */}
            <Box className={'gameButtonsContainer'}>
                {randomSelection.map((index) => {
                    const currentNumber = randomNumbers[index];
                    const isSelected = selectedAnswer === currentNumber;
                    const isDisabled = disabledButtons[index];
                    return (
                        <Button
                            key={index}
                            className={`gameButton 
                            ${isSelected ? (isCorrect ? 'selected correct' : 'selected incorrect') : isDisabled ? 'disabled' : 'default'}`}
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
