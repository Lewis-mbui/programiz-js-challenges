// Write a function to check if a given number is an ugly number.
// An ugly number is any positive integer whose 
// prime factors are limited to 
// e.g 30 (2, 3, 5) and 15 (3, 5) are both ugly numbers
// while 14(2, 7) is not an ugly number

const num = 2;
console.log(isUgly(num));

function isUgly(num) {
  let factor = 2;

 while (num > 1) {
  if (num % factor === 0) {
    if (factor > 5)  return "Not Ugly";
    num = num / factor;
    continue;
  }
  factor++;
 }

 return "Ugly";
}

/*
function isUgly(num) {
  if (num <= 0) return "Not Ugly";

  while (num % 2 === 0) num /= 2;
  while (num % 3 === 0) num /= 3;
  while (num % 5 === 0) num /= 5;

  return num === 1 ? "Ugly" : "Not Ugly";
}
*/