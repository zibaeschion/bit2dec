const AnswerChecker = (
    answer,
    correctAnswer,
    randomNumbers,
    gameOver,
    setSelectedAnswer,
    setIsCorrect,
    setGameOver,
    setDisabledButtons,
    setShowNextButton
) => {
    if (!gameOver) {
        setSelectedAnswer(answer);

        if (answer === correctAnswer) {
            setIsCorrect(true);
            setGameOver(true);
            // Only disable buttons that are not the correct answer
            setDisabledButtons(
                randomNumbers.map((num) => num !== correctAnswer)
            );
            setShowNextButton(true);
        } else {
            setIsCorrect(false);
        }
    }
};
export default AnswerChecker;
