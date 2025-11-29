// Write a function to find all Mersenne primes up to a 
// given number.
// A Mersenne prime is a prime number that is one less 
// than a power of two, expressed as 2 ** p - 1, where p is
// also a prime number e.g 7 --> 2 ** 3 - 1 = 7

const n = 30;
console.log(mersennePrimes(n));


function mersennePrimes(n) {
  const primes = [];

  const isPrime = (num) => {
    if (num < 2) return false;

    for (let factor = 2; factor < num; factor++)
      if (num % factor === 0) return false;
    return true;
  }

  const isMersenne = (arr, num) => {
    for (const n of arr)
      if ((2 ** n) - 1 === num) return true;
    return false
  }

  for (let i = 2; i <= n; i++)
    if(isPrime(i)) primes.push(i);

  if (!primes.length) return primes;

  return primes.filter((num, i, arr) => {
    return isMersenne(arr.slice(0, i + 1), num);
  });
}

/* 
// SIEVE OF ERATOSTHENES ALGORITHM
function mersennePrimes(n) {
  // Sieve of Eratosthenes
  const sieve = Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= n; i++) if (sieve[i]) primes.push(i);

  const out = [];

  for (const p of primes) {
    const candidate = (2 ** p) - 1;
    if (candidate > n) break;
    if (sieve[candidate]) out.push(candidate);
  }

  return out;
}

*/