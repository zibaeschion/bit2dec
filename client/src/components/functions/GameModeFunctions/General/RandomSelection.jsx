/*
    it shuffles the input answerNumber array
 */
const RandomSelection = (answerNumber, setSelectedRandomSelection) => {
    const numbers = Array.from({ length: answerNumber }, (_, i) => i);
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setSelectedRandomSelection(numbers);
};
export default RandomSelection;
