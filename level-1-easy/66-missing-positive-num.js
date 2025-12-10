// Write a function to find the smallest missing positive 
// number from an array.
// For example, in array [2, 3, 7, 6, 8, -1, -10, 15], the smallest
// positive integer is 2. The nex smallest positive integer is 1,
// which is missing from the array.
// Return the smallest missing +ve number from the given array

// const arr = [3, 4, -1, 1];
// const arr = [2, 3, 7, 6, 8, -1, -10, 15];
const arr = [3, 4, -1, 1];
console.log(findMissingPositive(arr));

function findMissingPositive(arr) {
  // Store all positive integers for fast lookup
  const set = new Set(arr.filter(n => n > 0));

  // Check numbers starting from 1 upwards
  let smallest = 1;

  // Keep increasing smallest until it's not found in the Set
  while (set.has(smallest)) {
    smallest++;
  }

  return smallest;
}


/*
function findMissingPositive(arr) {
  const n = arr.length;

  // Step 1: Ignore irrelevant values
  for (let i = 0; i < n; i++) {
    if (arr[i] <= 0 || arr[i] > n) {
      arr[i] = n + 1;
    }
  }

  // Step 2: Mark existing numbers by negating their index
  for (let i = 0; i < n; i++) {
    const val = Math.abs(arr[i]);
    if (val >= 1 && val <= n) {
      arr[val - 1] = -Math.abs(arr[val - 1]);
    }
  }

  // Step 3: Find first positive index (missing number)
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      return i + 1;
    }
  }

  return n + 1;
}

*/