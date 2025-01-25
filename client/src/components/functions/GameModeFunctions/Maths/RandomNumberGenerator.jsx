import RandomAnswerGenerator from "./RandomAnswerGenerator.jsx";
import convertIntoSpaced from "../General/convertIntoSpaced.jsx";
import toBinaryString from "../General/toBinaryString.jsx";
import generateRandomBitBinary from "../General/generateRandomBitBinary.jsx";

const RandomNumberGenerator = (
    answerNumber,
    bitLength,
    setRandomBinaryNumbers,
    setRandomNumbers,
    setCorrectAnswer,
    setCorrectBinaryAnswer,
) => {

    let numbers = [];
    let binaryNumbers = [];
    let sum = 0;
    let answerNumbers = [];

    // Generate two unique random bit numbers based on the bitLength used as the operators for the addition
    // further pushes them into the binaryNumbers and numbers Array <- used to store all numbers
    while (numbers.length < 2) {
        // generation of the 2 numbers
        let randomNumber = generateRandomBitBinary(bitLength);

        // avoids addition of two same numbers
        if (!numbers.includes(randomNumber)) {

            numbers.push(randomNumber);

            let spacedBinary = convertIntoSpaced(randomNumber, bitLength);

            // pushes the formated binaryString into the binaryNumbers array
            binaryNumbers.push(spacedBinary);
        }
    }

    // Calculate the sum of the two binary numbers and sets the correct answer in decimal and binary
    sum = numbers[0] + numbers[1];
    setCorrectAnswer(sum);

    let spacedBinary = convertIntoSpaced(sum, bitLength);

    // sets the correctBinaryAnswer to the formated binaryString and further pushes it to the binaryNumbers as well
    setCorrectBinaryAnswer(spacedBinary);
    binaryNumbers.push(toBinaryString(sum, bitLength));

    // generates all other numbers used as the selectable buttons (answerNumber - 1 as the sum is already given)
    answerNumbers = RandomAnswerGenerator(answerNumber - 1, sum, bitLength);

    // after the generation of the answerNumbers Array it is converted into binaries
    for (let i = 0; i < answerNumbers.length; i++) {
        binaryNumbers.push(toBinaryString(answerNumbers[i], bitLength));
    }

    // set the state for the binary numbers and the correct answer
    setRandomBinaryNumbers([...binaryNumbers]);
    setRandomNumbers([sum, ...answerNumbers]);
};
export default RandomNumberGenerator