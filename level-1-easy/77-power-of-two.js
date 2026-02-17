// Write a function to check if a given number is a power of 2

const n = 64;
console.log(checkPowerOfTwo(n));

function checkPowerOfTwo(n) {
  while (n >= 1) {
    if (n % 2 !== 0) break;
    n /= 2;
  }

  return n === 1;
}