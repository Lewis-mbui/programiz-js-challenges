// Write a function to calculate the double factorial.
// The double factorial (n!!) is the product of all integers from 
//  1 to with the same parity (odd or even) as n
// For example, for n = 7: n!! = 1 x 3 x 5 x 7 = 105

const n = 7;
console.log(doubleFactorial(n));

function doubleFactorial(n) {
  let product = 1;
  let start = n % 2 === 0 ? 2 : 1;

  for (let i = start; i <= n; i += 2) {
    product *= i;
  }

  return product;
}

/*
function doubleFactorial(n) {
  if (n <= 0) return 1; // Base case
  return n * doubleFactorial(n - 2);
}

*/