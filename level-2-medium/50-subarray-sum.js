// Write a function to find the sum of all subarrays of 
// an array.
// We can find the sum of all subarrays of an array by 
// directly calculating the contribution  of each element 
// using the formula: arr[i] * (i + 1) * (n - i)

// const arr = [1, 2, 3];
const arr = [5, 4, 6, 2];
console.log(subArraySum(arr));

function subArraySum(arr) {
  const n = arr.length;

  return arr.reduce((prev, num, i) => {
    return prev + num * (i + 1) * (n - i);
  }, 0);
}