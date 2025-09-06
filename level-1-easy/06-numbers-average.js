// Write a function to calculate the average of all the numbers in an array.

const arr = [4, 6, 8, 10];
console.log(calculateAverage(arr));

function calculateAverage(arr) {
  return arr.reduce((acc, val) => acc + val) / arr.length;
}