import generateRandomBitBinary from '../General/generateRandomBitBinary.jsx';
import toBinaryString from '../General/toBinaryString.jsx';
import convertIntoSpaced from '../General/convertIntoSpaced.jsx';

const generateRandomNumbersClassic = (
    bitLength,
    setRandomNumbers,
    setRandomBinaryNumbers
) => {
    let maxLength = bitLength === 4 ? 9 : 12; // Determine the maximum array length based on bit length

    let numbers = []; // Store generated random numbers
    let binaryNumbers = []; // Store corresponding binary representations

    // Generate unique random numbers until the array reaches maxLength
    while (numbers.length < maxLength) {
        let randomNumber = generateRandomBitBinary(bitLength);
        // Ensure uniqueness of the generated number
        if (!numbers.includes(randomNumber)) {
            // Convert number to binary with leading zeros based on bit length
            let binaryNumber = toBinaryString(randomNumber, bitLength);

            // Format binary number with a space after 4 bits if bit length is 8
            bitLength === 8
                ? (binaryNumber = convertIntoSpaced(randomNumber, bitLength))
                : '';

            // Add the number and its binary equivalent to their respective arrays
            numbers.push(randomNumber);
            binaryNumbers.push(binaryNumber);
        }
    }

    // Update state with the generated numbers
    setRandomBinaryNumbers(binaryNumbers);
    setRandomNumbers(numbers);
};

export default generateRandomNumbersClassic;
