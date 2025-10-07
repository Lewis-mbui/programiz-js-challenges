// Write a function to find the largest prime 
// number in an array of integers.
// If there are no prime nums return null

const arr = [1, 5, -7, 12, 7];
console.log(findLargestPrimeNumber(arr));

function findLargestPrimeNumber(arr) {
  function isPrime(num) {
    if (num < 2) return false;

    for (let factor = 2; factor < num; factor++)
      if (num % factor === 0) return false;
    return true;
  }

  const primeNums = arr.slice()
    .filter((num) => isPrime(num));

  if (primeNums.length === 0) return null;
    
  return primeNums.reduce((a, b) => (b > a) ? b : a);
}

/*
function largestPrime(arr) {
  const primes = arr.filter(isPrime);
  return primes.length ? Math.max(...primes) : null;
}
*/
