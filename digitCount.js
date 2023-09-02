/*
    -Create a function called digitCount that accepts a number and returns the number of digits in that number
 */

// My solution
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

module.exports = { digitCount };

console.log(digitCount(0));
console.log(digitCount(1));
console.log(digitCount(12));
console.log(digitCount(123));
console.log(digitCount(1234));
console.log(digitCount(12345));
console.log(digitCount(123456));
console.log(digitCount(1234567));
