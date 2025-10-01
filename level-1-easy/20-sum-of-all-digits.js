// Write a function to calculate the sum of 
// all digits in a number.

const num = 12345;
console.log(calculateSumOfDigits(num));

function calculateSumOfDigits(num) {
  return num.toString()
    .split('')
    .reduce((a, b) => +a + +b);
}