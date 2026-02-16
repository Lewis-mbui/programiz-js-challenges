// Write a function to check if the sum of two numbers is a 
// perfect square.

const num1 = 9;
const num2 = 16;
console.log(checkPerfectSquare(num1, num2));

function checkPerfectSquare(num1, num2) {
  return Number.isInteger(Math.sqrt(num1 + num2));
}