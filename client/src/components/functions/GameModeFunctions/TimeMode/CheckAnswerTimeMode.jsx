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
    if (!gameOver) {
        setSelectedAnswer(answer);

        if (answer === correctAnswer) {
            setIsCorrect(true);
            setCorrectClicks((prev) => prev + 1);
        } else {
            setIsCorrect(false);
            setIncorrectClicks((prev) => prev + 1);
        }

        // Disable all buttons except the one selected
        const newDisabledButtons = Array(12).fill(true);
        newDisabledButtons[index] = false;
        setDisabledButtons(newDisabledButtons);

        // Show the "Next" button after answering
        setShowNextButton(true);
    }
};

export default checkAnswerTimeMode;
