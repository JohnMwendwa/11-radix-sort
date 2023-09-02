/*
    -Create a function called mostDigits that accepts an array of numbers and returns the number of digits in the largets numbers in the list
*/

const { digitCount } = require("./digitCount");

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

module.exports = mostDigits;

// console.log(mostDigits([1234, 56, 7])); //4
// console.log(mostDigits([1, 1, 11111, 1])); //5
// console.log(mostDigits([12, 34, 56, 78])); //2
