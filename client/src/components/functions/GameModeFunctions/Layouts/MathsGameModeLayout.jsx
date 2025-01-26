import { useEffect, useState, Fragment } from 'react';

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

export default function MathsGameModeLayoutTest(props) {
    const {
        isCorrect,
        randomBinaryNumbers,
        randomNumbers,
        correctBinaryAnswer,
        randomSelection,
        selectedAnswer,
        disabledButtons,
        checkAnswer,
        showNextButton,
        handleNextClick,
        correctAnswer,
    } = props;

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const yellow = prefersDarkMode ? '#ffc700' : '#c29b01';
    const [solutionShown, setSolutionShown] = useState(false);
    const [rowRevealed, setRowRevealed] = useState([false, false, false]);
    const [helpNeeded, setHelpNeeded] = useState(false);
    const [processRevealed, setProcessRevealed] = useState(0);

    const revealSolution = (rowIndex) => {
        if (rowIndex < rowRevealed.length) {
            const timeout = rowIndex === 0 ? 200 : 5000;
            setProcessRevealed(
                setTimeout(() => {
                    const newRevealed = [false, false, false];
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
            setRowRevealed([false, false, false]);
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
        // creates the wrapper for all our gameContent
        <Box className={'gameContainer'}>
            {/* displays the question if you haven't answered (correct) yet and else it says "correct" */}
            <Typography variant="h4" className={'gameMessage'}>
                {isCorrect
                    ? 'Correct!'
                    : 'What is the sum of the two binary numbers?'}
            </Typography>

            {/* creates the hints button, which is available after a period of time and starts the revealing of the
            solution */}
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

            {/* the grid, which includes the steps to get to the solution excluding the soultion itself */}
            <Grid2
                columns={12}
                container
                spacing={0}
                width={solutionShown ? '70%' : '50%'}
            >
                {/* empty grid element just for better visuals */}
                <Grid2 size={1} />
                {/* includes both operands */}
                <Grid2 size={11}>
                    <Typography
                        variant="h4"
                        className={'mathsHintGridTypo'}
                        color={yellow}
                    >
                        {`${randomBinaryNumbers[0]} + ${randomBinaryNumbers[1]}`}
                    </Typography>
                </Grid2>
                {/* equal sign between the operands and the solution */}
                <Grid2 size={1}>
                    <Typography variant="h4" className={'mathsHintGridTypo'}>
                        =
                    </Typography>
                </Grid2>
                {/* displays a "?" if you haven't answered (correct) yet and else it shows the correct solution in
                 decimal or if you activated hints without guessing right it shows the correct solution in binary */}
                <Grid2 size={11}>
                    <Collapse in={!rowRevealed[0]}>
                        <Typography
                            variant="h4"
                            className={'mathsHintGridTypo'}
                        >
                            {isCorrect ? `${randomNumbers[0]}` : `?`}
                        </Typography>
                    </Collapse>
                    <Collapse in={rowRevealed[0]}>
                        <Typography
                            variant="h4"
                            className={'mathsHintGridTypo'}
                            color={yellow}
                        >
                            {correctBinaryAnswer}
                        </Typography>
                    </Collapse>
                </Grid2>

                {/* equal sign to separate from the solution steps */}
                <Grid2 size={1}>
                    <Collapse in={rowRevealed[1]}>
                        <Typography
                            variant="h4"
                            className={'mathsHintGridTypo'}
                        >
                            =
                        </Typography>
                    </Collapse>
                </Grid2>

                {/* calculation and creation of the solution steps which shows the decimal addition from the bits of the
                 shown binary solution */}
                {correctBinaryAnswer &&
                    Array.from(correctBinaryAnswer.replace(/\s/g, '')).map(
                        (bit, bitIndex) => {
                            {
                                /* correctBinaryAnswer.replace(/\s/g, '') is necessary to remove the spaces between the groups of 4
                     numbers to receive the real bitPower */
                            }
                            const bitPower =
                                correctBinaryAnswer.replace(/\s/g, '').length -
                                1 -
                                bitIndex;
                            {
                                /* calculates the shown decimals */
                            }
                            const result =
                                bit === '1' ? Math.pow(2, bitPower) : 0;

                            return (
                                // Fragment used as a wrapper to display the decimal numbers as well as the "+"
                                <Fragment key={`result-${bitIndex}`}>
                                    {/* result per Bit */}
                                    <Grid2 size={solutionShown ? 2 : 11}>
                                        <Collapse in={rowRevealed[1]}>
                                            <Typography
                                                variant="h4"
                                                className={'mathsHintGridTypo'}
                                            >
                                                {`${result}`}
                                            </Typography>
                                        </Collapse>
                                    </Grid2>

                                    {/* places a plus between the decimals based on the length of the unspaced binary solution */}
                                    {bitIndex <
                                        correctBinaryAnswer.replace(/\s/g, '')
                                            .length -
                                            1 && (
                                        <Grid2 size={1}>
                                            <Collapse in={rowRevealed[1]}>
                                                <Typography
                                                    variant="h4"
                                                    className={
                                                        'mathsHintGridTypo'
                                                    }
                                                >
                                                    +
                                                </Typography>
                                            </Collapse>
                                        </Grid2>
                                    )}
                                </Fragment>
                            );
                        }
                    )}
            </Grid2>
            {/* a new grid with the same setting as the one above; needed to separate the solution one line under all
            the decimals creating a nicer visual */}
            <Grid2
                columns={12}
                container
                spacing={0}
                width={solutionShown ? '70%' : '40%'}
            >
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
                    <Collapse in={rowRevealed[2]}>
                        <Typography
                            variant="h4"
                            className={'mathsHintGridTypo'}
                        >
                            {correctAnswer}
                        </Typography>
                    </Collapse>
                </Grid2>
            </Grid2>

            {/* creates the box including the buttons which displays the solution possibilities */}
            <Box className={'gameButtonsContainer'}>
                {randomSelection.map((index) => {
                    const currentNumber = randomNumbers[index];
                    const isSelected = selectedAnswer === currentNumber;
                    const isDisabled = disabledButtons[index];
                    return (
                        // has a query asking if the button one clicked is correct and if not displays it red or if
                        // correct as green, but only the current. All buttons not pressed are displayed with the
                        // "default" value
                        <Button
                            key={index}
                            className={`gameButton 
                            ${isSelected ? (isCorrect ? 'selected correct' : 'selected incorrect') : isDisabled ? 'disabled' : 'default'}`}
                            onClick={() => checkAnswer(currentNumber)}
                            disabled={isDisabled}
                        >
                            {currentNumber}
                        </Button>
                    );
                })}
            </Box>
            {/* the button shown when one selected the right answer and is hidden til then */}
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
