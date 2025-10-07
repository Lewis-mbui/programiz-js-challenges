// Write a function to make the sum of two numbers even.

const num1 = 4;
const num2 = 3;
console.log(makeSumEven(num1, num2));

function makeSumEven(num1, num2) {
  const sum = num1 + num2;

  return (sum % 2 === 0) ? sum : sum + 1;
}