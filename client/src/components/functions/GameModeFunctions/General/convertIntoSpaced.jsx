import toBinaryString from "./toBinaryString.jsx";

const convertIntoSpaced = (
        num,
        bitLength
) =>{

    let binaryString = toBinaryString(num, bitLength);

    // approves that the binaryString is dividable by 4; and if not adds zeros in the beginning til it is
    while (binaryString.length % 4 !== 0) {
        binaryString = '0' + binaryString;
    }

    // separation of the string into groups of 4 by spaces (e.g.1000 0101)
    binaryString = binaryString.replace(/(.{4})(?=.)/g, '$1 ');

    return binaryString;
}
export default convertIntoSpaced