// Write a function to check if an array is sorted
// in ascending order
const arr = [10, 10, 30, 40];
console.log(isArraySorted(arr));


function isArraySorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) return "Not Sorted"
  }

  return "Sorted";
}