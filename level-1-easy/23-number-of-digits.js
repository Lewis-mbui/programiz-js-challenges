// Write a function to count the number of digits in a number.

const num = 287;
console.log(countDigits(num));

function countDigits(num) {
  return num.toString().length;
}