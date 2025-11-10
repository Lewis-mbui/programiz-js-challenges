// Write a function to calculate the sum of numbers in an array.

const arr = [10, 20, 30];
console.log(calculateSum(arr));

function calculateSum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}