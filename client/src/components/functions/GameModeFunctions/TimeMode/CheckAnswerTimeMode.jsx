const checkAnswerTimeMode = (
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
) => {
    // If the game is not over, process the answer
    if (!gameOver) {
        setSelectedAnswer(answer);

        // Check if the answer is correct
        if (answer === correctAnswer) {
            setIsCorrect(true);
            setCorrectClicks((prev) => prev + 1);
        } else {
            setIsCorrect(false);
            setIncorrectClicks((prev) => prev + 1);
        }

        // Disable all buttons except the one selected
        const newDisabledButtons = Array(12).fill(true); // Start by disabling all buttons
        newDisabledButtons[index] = false; // Enable the button that was clicked
        setDisabledButtons(newDisabledButtons); // Update the disabled buttons state

        // Show the "Next" button after answering
        setShowNextButton(true);
    }
};

export default checkAnswerTimeMode;
