// Write a function to calculate the alternating factorial 
// of a number.
// The alternating factorial of n is defined as the sum of the 
// factorial of each integer from 1 to n where the factorial 
// of each odd integer is subtracted and the factorial of 
// each even integer is added

const n = 5;
console.log(alternatingFactorial(n));


function alternatingFactorial(n) {
  const factorial = (n) => {
    if (n < 1) return 1;

    return n * factorial(n - 1);
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    const f = factorial(i);

    sum += (i % 2 == 0 ? f : -f);
  }

  return sum;
}

/*
function alternatingFactorial(n) {
  let sum = 0;
  let fact = 1; // will hold i!

  for (let i = 1; i <= n; i++) {
    fact *= i;                 // build factorial on the fly
    sum += (i % 2 === 0 ? fact : -fact);
  }

  return sum;
}
*/

/* 
function alternatingFactorial(n) {
  let fact = 1;

  return [...Array(n)].reduce((sum, _, idx) => {
    const i = idx + 1;     // convert index (0-based) → number (1-based)
    fact *= i;              // update factorial
    return sum + (i % 2 === 0 ? fact : -fact);
  }, 0);
}

*/