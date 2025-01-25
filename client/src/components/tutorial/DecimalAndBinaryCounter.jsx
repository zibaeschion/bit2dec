import { Grid2, Paper, Slide, Stack, Typography, useMediaQuery} from "@mui/material";
import React, {useEffect, useRef} from "react";

/**
 * This component displays two counters side by side. One shows a decimal number while the other one displays the
 * corresponding binary number.
 */
export default function DecimalAndBinaryCounter(props) {
    const [decimalDigitVisible, setDecimalDigitVisible] = React.useState([true, true]);
    const [binaryDigitVisible, setBinaryDigitVisible] = React.useState([true, true, true, true]);
    const containerRefDecimal = useRef(null);
    const containerRefBinary = useRef(null);

    const [decimalNumber, setDecimalNumber] = React.useState([0, 0]);
    const [binaryNumber, setBinaryNumber] = React.useState([0, 0, 0, 0]);

    const [slideDirection, setSlideDirection] = React.useState('up');

    const {colorForBinaryNumbers} = props

    const slideTimeout = 400

    /**
     * these two functions only change one digit at the place specified by the digitIndex. If there is an overflow at
     * this digit, the next one will be increased as well.
     * @param digitIndex
     */
    const increaseBinaryDigit = (digitIndex) => {
        if (!(digitIndex >= binaryNumber.length || digitIndex < 0)) {
            if (binaryNumber[digitIndex] === 0) {
                setBinaryNumber((array) => array.with(digitIndex, 1))
            } else {
                setBinaryNumber((array) => array.with(digitIndex, 0))
                increaseBinaryDigit(digitIndex - 1);
            }
        }
    }

    const increaseDecimalDigit = (digitIndex) => {
        if (!(digitIndex >= decimalNumber.length || digitIndex < 0)){
            if (decimalNumber[digitIndex] < 9) {
                setDecimalNumber((array) => array.with(digitIndex, decimalNumber[digitIndex] + 1))
            } else {
                setDecimalNumber((array) => array.with(digitIndex, 0))
                increaseDecimalDigit(digitIndex - 1);
            }
        }
    }

    /**
     * If the highest possible index is the input, these two functions will set all fields in the arrays
     * decimalDigitVisible and binaryDigitVisible false, that correspond to digits in the binary and decimal numbers
     * that would change, if the whole number would be increased by one.
     * @param digitIndex
     */
    const hideBinaryDigits = (digitIndex) => {
        if (digitIndex < binaryNumber.length && digitIndex >= 0) {
            setBinaryDigitVisible((array) => array.with(digitIndex, false))
            if (binaryNumber[digitIndex] === 1) {
                hideBinaryDigits(digitIndex - 1)
            }
        }
    }

    const hideDecimalDigits = (digitIndex) => {
        if (digitIndex < decimalDigitVisible.length && digitIndex >= 0) {
            setDecimalDigitVisible((array) => array.with(digitIndex, false))
            if (decimalNumber[digitIndex] === 9) {
                hideDecimalDigits(digitIndex - 1)
            }
        }
    }



    /**
     * increases both numbers by one.
     * First, it hides all digits about to change, then changes their values and displays them again with some delay.
     * If the number is already 15 (or 1111), the decimal numbers will be reset in the next step and the delay is longer.
     */
    const changeNumber = () => {
        let transitionDuration = 500
        if (decimalNumber[0] === 1 && decimalNumber[1] === 5) {
            setDecimalDigitVisible([false, false])
            transitionDuration = 1000
        } else {
            setSlideDirection("down");
            hideDecimalDigits(decimalDigitVisible.length - 1)
        }
        hideBinaryDigits(binaryDigitVisible.length - 1)
        setTimeout(() => {
            if (decimalNumber[0] === 1 && decimalNumber[1] === 5) {
                setDecimalNumber([0, 0])
            } else {
                increaseDecimalDigit(decimalDigitVisible.length - 1)
            }
            increaseBinaryDigit(binaryNumber.length - 1)
            setSlideDirection("up");
            setDecimalDigitVisible([true, true]);
            setBinaryDigitVisible([true, true, true, true]);
        }, transitionDuration)
    }

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        const twoSecondsAsMilliseconds = 2000
        let interval = setInterval(() => {
            changeNumber()

        }, twoSecondsAsMilliseconds);
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <Grid2 container spacing={2} columns={13}>
            <Grid2 size={4} >
                <Typography variant="h4" fontSize={{xs: "1.2em", sm: "2.2em"}}>Decimal Numbers</Typography>
            </Grid2>
            <Grid2 size={1} ></Grid2>
            <Grid2 size={8}>
                <Typography variant="h4" fontSize={{xs: "1.2em", sm: "2.2em"}} color={colorForBinaryNumbers}>Binary Numbers</Typography>
            </Grid2>
            <Grid2 size={4}>
                <Paper ref={containerRefDecimal} sx={{overflow: 'hidden', backgroundColor: prefersDarkMode ? '#3c3c3c' : '', color: prefersDarkMode ? '#fff' : ''}}>
                    <Stack direction="row" justifyContent={"space-evenly"} >
                        <Slide in={decimalDigitVisible[0]} direction={slideDirection} container={containerRefDecimal.current} timeout={slideTimeout}>
                            <Typography variant="h4">
                                {decimalNumber[0]}
                            </Typography>
                        </Slide>
                        <Slide in={decimalDigitVisible[1]} direction={slideDirection} container={containerRefDecimal.current} timeout={slideTimeout}>
                            <Typography variant="h4">
                                {decimalNumber[1]}
                            </Typography>
                        </Slide>
                    </Stack>
                </Paper>
            </Grid2>
            <Grid2 size={1} align={"center"} >
                <Typography variant="h4"> = </Typography>
            </Grid2>
            <Grid2 size={8}>
                <Paper ref={containerRefBinary} sx={{overflow: 'hidden', backgroundColor: prefersDarkMode ? '#3c3c3c' : ''}}>
                    <Stack direction="row" justifyContent={"space-evenly"}>
                        <Slide in={binaryDigitVisible[0]} direction={slideDirection} container={containerRefBinary.current} timeout={slideTimeout}>
                            <Typography color={colorForBinaryNumbers} variant="h4">
                                {binaryNumber[0]}
                            </Typography>
                        </Slide>
                        <Slide in={binaryDigitVisible[1]} direction={slideDirection} container={containerRefBinary.current} timeout={slideTimeout}>
                            <Typography color={colorForBinaryNumbers} variant="h4">
                                {binaryNumber[1]}
                            </Typography>
                        </Slide>
                        <Slide in={binaryDigitVisible[2]} direction={slideDirection} container={containerRefBinary.current} timeout={slideTimeout}>
                            <Typography color={colorForBinaryNumbers} variant="h4">
                                {binaryNumber[2]}
                            </Typography>
                        </Slide>
                        <Slide in={binaryDigitVisible[3]} direction={slideDirection} container={containerRefBinary.current} timeout={slideTimeout}>
                            <Typography color={colorForBinaryNumbers} variant="h4">
                                {binaryNumber[3]}
                            </Typography>
                        </Slide>
                    </Stack>
                </Paper>
            </Grid2>
        </Grid2>
    )
}