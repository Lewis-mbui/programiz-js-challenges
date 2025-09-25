// Write a function to find the interval of an array.
// Interval is the difference between the largest number 
// and the smallest number in an array.
const arr = [5, 2, 9, 1];

console.log(findInterval(arr));

function findInterval(arr) {
  const maxNum = arr.reduce((prev, num) => (num > prev) ? num : prev);
  const minNum = arr.reduce((prev, num) => (num < prev) ? num : prev);

  return maxNum - minNum;
}

/*
function findInterval(arr) {
    return (Math.max(...arr)) - (Math.min(...arr));
}
*/