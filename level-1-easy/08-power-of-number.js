// Write a function to calculate the power of a number.
let base = 4;
let exponent = 3;

console.log(calculatePower(base, exponent));

function calculatePower(base, exponent) {
  let product = 1;

  for (let i = 0; i < exponent; i++)
    product *= base;

  return product;
}