// Write a function to check if a number is a 
// primary pseudoperfect number.

// A primary pseudoperfect number n is a positive integer 
// that when its prime factors are multiplied, the result is n

// For example, given 42, its prime factors are 2, 3, 7
// Here, multiplying the prime factors of 42 
// gives 2 x 3 x 7 = 42 which is equal to 
// 42 itself. So, 42 is a primary pseudoperfect number

const n = 1806;
console.log(isPrimaryPseudoperfect(n));

function isPrimaryPseudoperfect(n) {
  function isPrime(num) {
    if (num < 2) return false;

    for (let factor = 2; factor < num; factor++)
      if (num % factor === 0) return false;

    return true;
  }

  const factors = [];

  for(let i = 1; i <= n; i++)
    if (n % i === 0) factors.push(i);

  const primeFactors = factors.filter((num) => isPrime(num));

  if (primeFactors.length === 0) return false;

  const product = primeFactors.reduce((a, b) => a * b);

  return product === n;
}