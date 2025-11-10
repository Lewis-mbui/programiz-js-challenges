// Write a function to return the smallest value in an array.

// const arr = [9, 6, 3, 5];
const arr = [3];
console.log(findSmallest(arr));

function findSmallest(arr) {
  if (arr.length === 0) return undefined;
  return arr.reduce((prev, num) => num < prev ? num : prev);
}