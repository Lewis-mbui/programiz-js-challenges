// Write a function to find the highest digit in a number.

const num = 39482;
console.log(findMaxDigit(num));

function findMaxDigit(num) {
  return num.toString()
    .split('')
    .reduce((prev, digit) => {
      return +digit > +prev ? +digit : +prev;
    }, 0);
}