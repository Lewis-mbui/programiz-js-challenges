// Write a function to check if a given number is a Blum integer or not.
// A Blum integer is a positive composite number n, where n = p * q
// Here,
// 1. p and q are distinct prime numbers
// 2. Both p and q leave a remainder of 3 when divided by 4

const n = 77;
console.log(isBlumInteger(n));


function isBlumInteger(n) {
  // 1. Generate primes less than n
  const primes = [];

  function isPrime(x) {
    if (x < 2) return false;
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }
    return true;
  }

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) primes.push(i);
  }

  // 2. Try all pairs p, q
  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      const p = primes[i];
      const q = primes[j];

      if (p * q === n && p % 4 === 3 && q % 4 === 3) {
        return true;
      }
    }
  }

  return false;
}


/* 
function isBlumInteger(n) {
  const isPrime = x => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++)
      if (x % i === 0) return false;
    return true;
  };

  const isFourThreePrime = x => isPrime(x) && x % 4 === 3;

  for (let p = 2; p * p <= n; p++) {
    if (n % p === 0) {
      const q = n / p;
      if (p !== q && isFourThreePrime(p) && isFourThreePrime(q)) {
        return true;
      }
    }
  }

  return false;
}
*/