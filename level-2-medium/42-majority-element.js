// Write a function to find the majority element.
// Majority element is the element that appears 
// more than half the time in an array.
// For example, in [3, 4, 4, 5, 4, 2, 4, 3, 4], 4 is the major
// element because total number of elements is 9, whose
// half is 4.5 and 4 appears 5 times, which is more than 4.5
// If no majority element exists, return -1

const arr = [3, 4, 4, 5, 4, 2, 4, 3, 4];
// const arr = [20, 20, 10, 10, 10, 20, 20]
// const arr = [4, 4, 4, 1, 2, 3]
console.log(findMajorityElement(arr));

function findMajorityElement(arr) {
  const freq = {};
  const n = arr.length;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > n / 2) return num; // Return immediately if majority found
  }

  return -1;
}

// BOYER-MOORE VOTING ALGORITHM
/*
function findMajorityElement(arr) {
  let candidate = null;
  let count = 0;

  // Step 1: Find potential candidate
  for (let num of arr) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }

  // Step 2: Verify the candidate
  count = 0;
  for (let num of arr) {
    if (num === candidate) count++;
  }

  return count > arr.length / 2 ? candidate : -1;
}
*/

/*
function findMajorityElement(arr) {
  const freq = new Map();

  arr.forEach(num => freq.set(num, (freq.get(num) || 0) + 1));

  const n = arr.length;
  const majority = [...freq.entries()].find(([num, count]) => count > n / 2);

  return majority ? majority[0] : -1;
}
*/