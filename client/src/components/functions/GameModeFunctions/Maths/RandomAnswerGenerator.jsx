const RandomAnswerNumberGenerator = (answerNumber, correctSum, bitLength) => {
    let numbers = [];

    //generates an array of numbers including the correct answer; as well having a dynamic input to manage
    //the answers created
    while (numbers.length < answerNumber) {
        let randomNumber = Math.floor(Math.random() * 2 ** bitLength);
        if (!numbers.includes(randomNumber) && randomNumber !== correctSum) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
};
export default RandomAnswerNumberGenerator;
