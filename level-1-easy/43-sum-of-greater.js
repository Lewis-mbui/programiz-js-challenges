// Write a function to find the sum of elements in an array 
// that are greater than a given number.

const arr = [4, 6, 10];
const num = 5
console.log(calculateSum(arr, num));

function calculateSum(arr, num) {
  return arr.reduce((prev, current) => {
    return current > num ? prev + current : prev;
  }, 0)
}