// Write a function to calculate the sum of squares of 
// first n natural numbers.

console.log(sumOfSquares(5));

function sumOfSquares(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i ** 2;
  }

  return sum;
}