/*
    -Define a function that accepts list of numbers
    -Figure out how many digits the largets number has
    -Loop from k=0 up to this largest number of digits
    -For each iteration of the loop:
        -create buckets for each digit(0 to 9)
        -place each number in the corresponding bucket based on its kth digit
    -Replace our existing array with values in our buckets, starting with 0 and going up to 9
    -Return list at the end
*/

const { getDigit } = require("./getDigit");
const mostDigits = require("./mostDigits");

function radixSort(arr) {
  const maxDig = mostDigits(arr);
  for (let k = 0; k < maxDig; k++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      bucket[digit].push(arr[i]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
}

console.log(radixSort([1234, 56, 7]));
console.log(radixSort([1, 1, 11111, 1]));
console.log(radixSort([12, 34, 56, 78]));
