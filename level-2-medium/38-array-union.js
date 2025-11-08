// Write a function to find the union of two arrays.
// A union is the collection of all distinct elements 
// of two arrays.
// For example, consider two arrays: [20, 10, 30] and 
// [10, 30, 40, 50]. Their union is [10, 20, 30, 40, 50]
// Given two arrays, arr1 and arr2, return their union as an
// array by sorting it in ascending order

// const arr1 = [20, 10, 30];
// const arr2 = [10, 20, 30, 40, 50];
const arr1 = [10, 10, 10]
const arr2 = [10, 10, 10]

console.log(findUnion(arr1, arr2));

function findUnion(arr1, arr2) {
  const unique = [];

  for (let i = 0; i < arr1.length; i++) {
    if (unique.includes(arr1[i]))
      continue;
    else unique.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (unique.includes(arr2[i]))
      continue;
    else unique.push(arr2[i]);
  }

  let swapped;
  let n = unique.length;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (unique[i] > unique[i + 1]) {
        [unique[i], unique[i + 1]] = [unique[i + 1], unique[i]];
        swapped = true;
      }
    }

    n--;
  } while (swapped)

  return unique;
}

/*
function findUnion(arr1, arr2) {
  // Step 1: Merge arrays using spread syntax
  const merged = [...arr1, ...arr2];

  // Step 2: Remove duplicates using a Set
  const unique = [...new Set(merged)];

  // Step 3: Sort in ascending order
  unique.sort((a, b) => a - b);

  return unique;
}
*/