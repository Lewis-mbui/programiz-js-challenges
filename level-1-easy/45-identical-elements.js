// Write a function to check if all elements in an array are identical.
// If any element is not equal to the first one, return "Not Identical"
// Otherwise return "identical"

const arr = [5, 5, 5];
console.log(checkIdenticalItems(arr));

function checkIdenticalItems(arr) {
  if (arr.length === 0) return 'Empty Array';

  const num = arr[0];

  for (let elem of arr)
    if (elem !== num) return "Not Identical";
  return "Identical"
}

/*
function checkIdenticalItems(arr) {
  if (arr.length === 0) return 'Empty Array';

  const first = arr[0];

  return arr.every((num) => {
    return num === first
  }) ? 'Identical' : "Not Identical"
}
*/

/*
const checkIdenticalItems = arr =>
  arr.length === 0
    ? "Empty Array"
    : new Set(arr).size === 1
      ? "Identical"
      : "Not Identical";
*/