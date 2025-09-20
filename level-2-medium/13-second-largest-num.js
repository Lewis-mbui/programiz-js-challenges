// Write a function to find the second largest number in an array.

const arr = [10, 20, 4];
console.log(findSecondLargest(arr));

function findSecondLargest(arr) {
  const sortedArr = [...arr].sort((a, b) => b - a);

  return sortedArr[1];
}