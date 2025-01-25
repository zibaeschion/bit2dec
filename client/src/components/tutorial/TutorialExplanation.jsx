import React, {useEffect, useRef} from "react";
import {
    Box, Button,
    Container,
    Grid2,
    Typography, useMediaQuery,
    useScrollTrigger, Zoom
} from "@mui/material";
import DecimalAndBinaryCounter from "./DecimalAndBinaryCounter.jsx";
import {useNavigate} from "react-router-dom";

/**
 * This page displays a tutorial on how to deal with binary numbers. As such, it mostly contains out of text.
 */
export default function TutorialExplanation() {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const colorForBinaryNumbers = prefersDarkMode ? '#ffc700' : '#c29b01'
    let screenHeight = window.innerHeight
    const navigate = useNavigate();

    /**
     * this variable turns true, if the user scrolled far enough to display just the binary digits instead of the
     * decimal ones
     */
    const decimalToBinaryTrigger = useScrollTrigger({
        disableHysteresis: true,
        /** the most optimal function that determines the point at which the decimal numbers turn to binary ones
         *  depending on the height of the window in pixels is
         *  f(screen height in pixels) = -(screen hight in pixels / 2) + 670
         *  this was calculated through some tests.
         */
        threshold: Math.max(670 - (screenHeight / 2), 0),
    })

    function handleResize() {
        screenHeight = window.innerHeight
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const bigText = {xs: "2.2em", sm: "3.2em"}

    return (
        <Container fixed align='center'>
            <Typography variant="h1">Tutorial</Typography>
            <Box marginTop={"30%"} align='center'>
                <Typography variant="h3" fontSize={bigText}>Normally, we present numbers using 10
                    different digits. We call this system
                    decimal numbers.</Typography>

                <Grid2 container spacing={1} columns={{xs: 5, md: 10}} width={"100%"} justifyContent={"space-around"}
                       marginY={"10%"}>
                    <Grid2 size={1}>
                        <Typography variant="h2" color={decimalToBinaryTrigger ? colorForBinaryNumbers : ""}>0</Typography>
                    </Grid2>
                    <Grid2 size={1}>
                        <Typography variant="h2" color={decimalToBinaryTrigger ? colorForBinaryNumbers : ""}>1</Typography>
                    </Grid2>
                    {[2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                        <Grid2 size={1}>
                            <Zoom in={!decimalToBinaryTrigger}>
                                <Typography variant="h2">{value}</Typography>
                            </Zoom>
                        </Grid2>
                    ))}
                </Grid2>

                <Typography variant="h3" fontSize={bigText}>But Computers can only comprehend two
                    different
                    digits to form numbers. </Typography>
                <Typography variant="h3" fontSize={bigText} marginTop={"10%"}>We call them binary numbers
                    and you can count with them as well</Typography>
            </Box>
            <Box marginTop={"10%"} width={{md: "80%", lg: "60%"}}>
                <DecimalAndBinaryCounter colorForBinaryNumbers={colorForBinaryNumbers}/>
            </Box>
            <Typography variant="body1" marginTop={"10%"}>If the highest value of a digit is reached (9 in decimal
                numbers and 1 in
                binary ones), the next digit to the left will be increased.</Typography>
            <Box marginTop={"20%"}>
                <Typography variant="body1">How can we convert them without counting up every time? </Typography>
                <Typography variant="body1">We can transform every decimal number in the following form:</Typography>
            </Box>
            <Grid2 container spacing={1} columns={12} marginY={"5%"} width={{xs: "60%", md: "40%", lg: "30%"}}>
                <Grid2 size={1}></Grid2>
                <Grid2 size={11}>
                    <Typography>3604</Typography>
                </Grid2>
                <Grid2 size={1}>=</Grid2>
                <Grid2 size={11}>
                    <Typography>3000 + 600 + 0 + 4</Typography>
                </Grid2>
                <Grid2 size={1}>=</Grid2>
                <Grid2 size={11}>
                    <Typography>3 • 1000 + 6 • 100 + 0 • 10 + 4 • 1</Typography>
                </Grid2>
                <Grid2 size={1}>=</Grid2>
                <Grid2 size={11}>
                    <Typography>3 • 10<sup>3</sup> + 6 • 10<sup>2</sup> + 0 • 10<sup>1</sup> + 4 •
                        10<sup>0</sup></Typography>
                </Grid2>
            </Grid2>
            <Typography variant="body1">We can do the same with binary numbers. But since we only have 2 different
                digits, we use exponentiations with base 2 instead of 10. </Typography>
            <Grid2 container spacing={1} columns={12} marginY={"5%"} width={{xs: "60%", md: "40%", lg: "30%"}}>
                <Grid2 size={1}></Grid2>
                <Grid2 size={11}>
                    <Typography color={colorForBinaryNumbers}>1011</Typography>
                </Grid2>
                <Grid2 size={1}>=</Grid2>
                <Grid2 size={11}>
                    <Typography color={colorForBinaryNumbers}>1000 + 0 + 10 + 1</Typography>
                </Grid2>
                <Grid2 size={1}>=</Grid2>
                <Grid2 size={11}>
                    <Typography color={colorForBinaryNumbers}>1 • 1000 + 0 • 100 + 1 • 10 + 1 • 1</Typography>
                </Grid2>
                <Grid2 size={1}>=</Grid2>
                <Grid2 size={11}>
                    <Typography>1 • 2<sup>3</sup> + 0 • 2<sup>2</sup> + 1 • 2<sup>1</sup> + 1 •
                        2<sup>0</sup></Typography>
                </Grid2>
                <Grid2 size={12}>
                    <Typography><i>We can calculate the corresponding decimal number from this</i></Typography>
                </Grid2>
                <Grid2 size={1}>=</Grid2>
                <Grid2 size={11}>
                    <Typography>1 • 8 + 0 • 4 + 1 • 2 + 1 • 1</Typography>
                </Grid2>
                <Grid2 size={1}>=</Grid2>
                <Grid2 size={11}>
                    <Typography>11</Typography>
                </Grid2>
            </Grid2>
            <Typography variant="body1">For the other way around, we must make some modulo-operations (calculate the
                rest of a division with the operator %).
                You take a decimal number modulo 2. Divide the number by two (with whole numbers) and repeat the
                procedure
                with the result until the number cant be divided anymore (since it is a 1) </Typography>
            <Grid2 container spacing={0} columns={5} marginY={"5%"}
                   width={{xs: "30%", sm: "20%", md: "12%", lg: "10%", xl: "7%"}}>
                <Grid2 size={1}>
                    <Typography>10</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>%</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>2</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>=</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>0</Typography>
                </Grid2>

                <Grid2 size={1}>
                    <Typography>5</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>%</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>2</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>=</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>1</Typography>
                </Grid2>

                <Grid2 size={1}>
                    <Typography>2</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>%</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>2</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>=</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>0</Typography>
                </Grid2>

                <Grid2 size={1}>
                    <Typography>1</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>%</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>2</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>=</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Typography>1</Typography>
                </Grid2>
            </Grid2>
            <Typography variant="body1">Reading from the bottom up, you get the binary representation of the decimal
                number 10:</Typography>
            <Typography variant="body1" color={colorForBinaryNumbers}>1010</Typography>
            <Typography variant="body1">Since the conversion takes a lot of time, you can try to
                memorise what binary
                number corresponds to which decimal one using bit2dec </Typography>
            <Box marginY={"10%"}>
                <Button variant="contained" fullWidth onClick={() => {navigate("/tutorial/4")}}>Let's get to the game!</Button>
            </Box>
        </Container>
    )
}
