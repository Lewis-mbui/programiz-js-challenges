// Write a function to calculate the sum of natural numbers
// The sum of the first n natural numbers can be calculated using the formula:
// sum = (n(n + 1)) / 2

const n = 10;
console.log(calculateSum(n));

function calculateSum(n) {
  return (n * (n + 1)) / 2;
}