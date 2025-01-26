const generateRandomBitBinary = (bitlength) => {
    // Generates a number between 0 and bitLength
    const max = 2 ** bitlength;
    return Math.floor(Math.random() * max);
};
export default generateRandomBitBinary;
