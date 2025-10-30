// Write a function to check if a number is a happy number.
// A happy number is defined by the following process: 
// 1. Replace the number by the sum of the squares of its digits repeatedly.
// 2. If this process eventually results in the number 1, then
// the original number is a happy number
// 3. The process does not enter an endless loop that does not include 1

// If the input number is a happy number: return true, Otherwise
// return false
// e.g: for n = 19 --> true

const n = 19;
console.log(isHappy(n));

function isHappy(n) {
  const seen = new Set();

  // Breaks the loop if n is 1 OR n is already in the set
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getSumOfSquares(n);
  }

  return n === 1;
}

function getSumOfSquares(num) {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

/*
function isHappy(n) {
  const seen = [];

  while (true) {
    const digits = n.toString().split('');
    let sum = 0;

    for (let d of digits) {
      sum += d * d;
    }

    if (sum === 1) return true;
    if (seen.includes(sum)) return false;

    seen.push(sum);
    n = sum;
  }
}
*/

// FLOYD'S CYCLE DETECTION
/*
function isHappy(n) { 
  let slow = n;
  let fast = getSumOfSquares(n);

  while (fast !== 1 && slow !== fast) {
    slow = getSumOfSquares(slow);
    fast = getSumOfSquares(getSumOfSquares(fast));
  }

  return fast === 1;
}
*/

