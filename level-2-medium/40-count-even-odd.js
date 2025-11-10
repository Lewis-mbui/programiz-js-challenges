// Write a function to count the number of even 
// and odd digits in an integer.
// Return an array of two integers from the given string where:
// first element - count of even digits
// second element - count of odd digits
// For example, given "883452", there are 4 even digits (8, 8, 4 and 2)
// and 2 odd digits (3 and 5). So, the result is [4, 2]

const numStr = "1234567890";
console.log(countEvenOddDigits(numStr));

function countEvenOddDigits(numStr) {
  let evenCount = 0;
  let oddCount = 0;

  for (char of numStr) {
    if (+char % 2 === 0) evenCount++;
    else oddCount++;
  }

  return [evenCount, oddCount];
}