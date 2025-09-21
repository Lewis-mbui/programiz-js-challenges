// Write a function to calculate HCF of two numbers.
const num1 = 36;
const num2 = 18;

console.log(hcf(num1, num2));

function hcf(num1, num2) {
  let maxFactor = 1;

  if (num1 === num2) return num1;

  const limit = num1 < num2 ? num1 : num2;

  for (let i = 1; i <= limit; i++) {
    if (num1 % i === 0 && num2 % i === 0)
      maxFactor = i;
  }

  return maxFactor;
}