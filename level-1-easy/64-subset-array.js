// Write a function to check if an array is a subset of 
// another array.
// A subset refers to a set that contains only elements that 
// are also found in another set.
// For example, A = [4, 6, 7] is a subset of B = [4, 6, 7, 5, 2]
// Return "Yes" if arr1 is a subset of arr2, otherwise return "No"

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4, 5];

console.log(isSubset(arr1, arr2));

function isSubset(arr1, arr2) {
  return arr1.every((num) => {
    return arr2.includes(num);
  }) ? "Yes" : "No";
}

/*
function isSubset(arr1, arr2) {
  const set2 = new Set(arr2);

  // arr1 is a subset if filtering arr1 by set2 gives back arr1 itself
  const filtered = arr1.filter(x => set2.has(x));

  return filtered.length === arr1.length ? "Yes" : "No";
}
*/