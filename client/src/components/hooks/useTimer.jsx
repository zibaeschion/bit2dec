import React, { useState, useEffect } from 'react';
import FormatTime from '../functions/GameModeFunctions/TimeMode/FormatTime.jsx';
import { updateHighScoreTimeFour } from '../functions/GameModeFunctions/TimeMode/UpdateHighScoreTimeFour.jsx';
import { updateHighScoreTimeEight } from '../functions/GameModeFunctions/TimeMode/UpdateHighScoreTimeEight.jsx';

// Custom hook for handling game timer and related actions
const useTimer = (
    initialTime,
    setGameOver,
    setDisabledButtons,
    setShowRestartButton,
    setShowNextButton,
    arrayLength,
    username,
    correctClicks,
    incorrectClicks,
    bitLength,
    score,
    setScore
) => {
    // State for tracking the current timer value
    const [timer, setTimer] = useState(initialTime);

    useEffect(() => {
        // If the timer is greater than 0, continue decrementing every 250ms
        if (timer > 0) {
            const timerInterval = setInterval(() => {
                setTimer((prev) => prev - 0.25);
            }, 250);
            return () => clearInterval(timerInterval);
        } else {
            // When timer reaches 0, calculate the final score and update the game state
            const newScore = Math.max(correctClicks - incorrectClicks, 0);
            setScore(newScore);
            console.log(newScore);
            setGameOver(true);
            setDisabledButtons(Array(arrayLength).fill(true));
            setShowNextButton(false);
            setShowRestartButton(true);

            // Update the high score based on the bitLength
            if (username !== null) {
                if (bitLength === 4) {
                    updateHighScoreTimeFour(username, newScore);
                } else {
                    updateHighScoreTimeEight(username, newScore);
                }
            }
        }
    }, [timer]);

    // Format the time to a readable format
    const time = FormatTime(timer);

    return { time, setTimer }; // Return formatted time and the timer setter function
};

export default useTimer;
