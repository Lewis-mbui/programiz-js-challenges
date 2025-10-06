// Write a function to calculate Euler's Totient function.

// Euler's Totient function counts the number of integers between 1
// n (inclusive), where each number and n only share 1 as common
// factor(divisor)

// For example, for n = 8,
// 8 and 1 share only 1 as a common factor
// 8 and 3 share only 1 as a common factor
// 8 and 5 share only 1 as a common factor
// 8 and 7 share only 1 as a common factor

// There are 4 numbers that share 1 as a common factor 
// with 8. Hence, the Euler's Totient function for n = 8 is 4

const n = 8;
console.log(eulerTotient(n));

function eulerTotient(n) {
  let count = 0;
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

  for (let i = 1; i <= n; i++) {
    if (gcd(i, n) === 1) count++;
  }

  return count;
}