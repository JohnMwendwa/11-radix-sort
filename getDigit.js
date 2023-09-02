/*
    -create a function call getDigit that accepts two arguments,a number and an index
    -The function should return the value at the given index
*/

function getDigit(num, idx) {
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
}

module.exports = { getDigit };

console.log(getDigit(123456, 0));
console.log(getDigit(123456, 1));
console.log(getDigit(123456, 2));
console.log(getDigit(123456, 3));
console.log(getDigit(123456, 4));
console.log(getDigit(123456, 5));
console.log(getDigit(123456, 6));
console.log(getDigit(123456, 7));
