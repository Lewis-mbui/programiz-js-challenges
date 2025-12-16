// Write a function to convert a number into an array of its 
// digits in reverse order.

const num = 952784;
console.log(numberToReversedArray(num));

function numberToReversedArray(num) {
  const result = [];

  while (num > 0) {
    result.push(num % 10);

    num = (num / 10) - (num / 10 % 1);
  }

  return result;
}