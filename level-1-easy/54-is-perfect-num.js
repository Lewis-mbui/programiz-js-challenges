// Write a function to check if a number is perfect.
// A perfect number is a positive integer that is equal to 
// the sum of its proper positive divisors excluding the 
// number itself. 
// For example, 28  is a perfect number because its proper positive divisors are
// 1 + 2 + 4 + 7 + 14 = 28

const num = 28;
console.log(checkPerfectNumber(num));


function checkPerfectNumber(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }

  return sum === num ? "Perfect" : "Not Perfect";
}