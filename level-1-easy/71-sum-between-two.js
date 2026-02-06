// Write a function to calculate the sum of digits between 
// two numbers.
// e.g between 10 and 13 --> 1 + 0 + 1 + 1 + 1 + 2 + 1 + 3 = 10

const num1 = 10;
const num2 = 15;
console.log(calculateSum(num1, num2))

function calculateSum(num1, num2) {
  let total = 0;

  for (let i = num1; i <= num2; i++) {
    total += i.toString().split('')
      .reduce((a, b) => a + Number(b), 0);
  }

  return total;
}