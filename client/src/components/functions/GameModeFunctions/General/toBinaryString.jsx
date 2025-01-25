const toBinaryString = (
    num,
    bitLength
) => {
    return num.toString(2).padStart(bitLength, '0');
}
export default toBinaryString;