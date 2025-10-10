// Write a function to check if a number is an Achilles number.

// An Achilles number is a number that:
// - Has prime factors with exponents of at least 2
// - But, it can't be expressed as m ^ k, where both
// m and k are greater than 1

//For example, 72 can be expressed using its prime factors as 
// 2 ^ 3 * 3 ^ 2 but can't be expressed as m ^ k

// Meanwhile, 16 can be expressed using its prime factors as 2 ^ 4
// which is also in the form m ^ k. So, 16 is not an Achiles Number.

// If the given number n is an Achiles number, return "Achilles"
// Otherwise, return "Not Achiles"

const n = 72;
console.log(checkAchillesNumber(n));

function checkAchillesNumber(n) {
  // --- Helper 1: Compute prime factors and their exponents ---
  function getPrimeFactors(n) {
    const factors = {};
    let divisor = 2;

    while (n > 1) {
      // If divisor divides n evenly, record and reduce
      if (n % divisor === 0) {
        factors[divisor] = (factors[divisor] || 0) + 1;
        n = n / divisor;
      } else {
        // Move to next possible divisor
        divisor++;
      }
    }
    return factors; // e.g. 72 -> { 2: 3, 3: 2 }
  }

  // --- Helper 2: Compute gcd of two numbers ---
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // --- Helper 3: Compute gcd of multiple numbers ---
  function gcdOfArray(arr) {
    return arr.reduce((a, b) => gcd(a, b));
  }

  // Step 1: Get prime factors with their exponents
  const factors = getPrimeFactors(n);

  // Step 2: Extract exponents into an array
  const exponents = Object.values(factors);

  // Step 3: Check if all prime exponents >= 2 (i.e., "powerful")
  const allAtLeastTwo = exponents.every(exp => exp >= 2);
  if (!allAtLeastTwo) {
    return "Not Achilles"; // Not powerful enough
  }

  // Step 4: Compute gcd of all exponents
  const gcdValue = gcdOfArray(exponents);

  // Step 5: If gcd > 1, n is a perfect power (so NOT Achilles)
  if (gcdValue > 1) {
    return "Not Achilles";
  }

  // Step 6: Otherwise, n is powerful but not perfect → Achilles
  return "Achilles";
}


function checkAchillesNumberOptimized(n) {
  // --- Helper: GCD for two numbers ---
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // --- Step 1: Prime factorization with efficient loop ---
  const factors = {};
  let divisor = 2;

  // Only need to check divisors up to sqrt(n)
  while (divisor * divisor <= n) {
    while (n % divisor === 0) {
      factors[divisor] = (factors[divisor] || 0) + 1;
      n /= divisor; // reduce n
    }
    divisor++;
  }

  // If n is still > 1 here, it is itself a prime factor
  if (n > 1) factors[n] = (factors[n] || 0) + 1;

  // --- Step 2: Extract the exponents ---
  const exponents = Object.values(factors);

  // If there's any exponent < 2, it's not "powerful"
  if (exponents.some(exp => exp < 2)) return "Not Achilles";

  // --- Step 3: Compute GCD of all exponents efficiently ---
  const gcdValue = exponents.reduce((a, b) => gcd(a, b));

  // --- Step 4: Classification ---
  return gcdValue === 1 ? "Achilles" : "Not Achilles";
}