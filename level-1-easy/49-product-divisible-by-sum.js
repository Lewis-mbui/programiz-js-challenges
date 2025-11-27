// Write a function to check if the product of two numbers is 
// divisible by their sum.

const num1 = 4;
const num2 = 2;
console.log(checkDivisibility(num1, num2));

function checkDivisibility(num1, num2) {
  const product = num1 * num2;
  const sum = num1 + num2;

  return product % sum === 0 ? "Divisible" : "Not divisible";
}