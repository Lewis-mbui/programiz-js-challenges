// Write a function to find the next greater permutation of the given array.
// A permutation is a rearrangement of the items in an array. 
// For example, given [100, 200, 50], its permutations are:
// [100, 50, 200], [200, 100, 50], 
// [200, 50, 100], [50, 100, 200], and [50, 200, 100]

// The next greater permutation of an array is defined 
// as the immediate next arrangement of its elements that 
// is greater than the current arrangement when compared 
// in numerical order. 

// From above array [100, 200, 50], arranging its 
// permutations in ascending order gives us 
// [50, 100, 200] → [50, 200, 100] → [100, 50, 200] → 
// [100, 200, 50] → [200, 50, 100] → [200, 100, 50]

// Here, the next greater permutation after 
// [100, 200, 50] is [200, 50, 100]
// which is our expected result 
// Given an array , return its next greater permutation by comparing 
// the ascending order of the elements.

const nums = [100, 200, 50];
nextPermutation(nums);

function nextPermutation(nums) {
  let n = nums.length;

  // Step 1: Find the "pivot"
  // This is the first element (from the right) that is smaller than the next one.
  // Example: [1, 8, 4, 5, 6, 7]
  // Pivot = 5 (since 5 < 6)
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--; // keep moving left until we find pivot
  }

  if (i >= 0) {
    // Step 2: Find the rightmost element greater than pivot
    // This ensures the "next bigger" number is the smallest possible
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }

    // Step 3: Swap pivot with that element
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Step 4: Reverse the suffix (part after pivot)
  // This makes it the smallest possible increasing sequence
  let left = i + 1, right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
}

function nextPermutationBruteForce(nums) {
  // Helper function to generate all permutations recursively
  function permute(arr) {
    // Base case: only one element → one permutation
    if (arr.length <= 1) return [arr];

    const result = [];

    // Pick each element one by one as the first element
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i]; // pick this element
      // Remaining elements after removing the current one
      const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
      // Get all permutations of the remaining
      const perms = permute(remaining);

      // Add current element in front of each smaller permutation
      perms.forEach(p => result.push([current, ...p]));
    }
    return result;
  }

  // Step 1: Generate all permutations
  const perms = permute(nums);

  // Step 2: Sort permutations lexicographically
  perms.sort((a, b) => a.join('') - b.join(''));

  // Step 3: Find where the current array is in the sorted list
  const index = perms.findIndex(p => p.join('') === nums.join(''));

  // Step 4: Return the next permutation (or wrap to smallest)
  return perms[index + 1] || perms[0];
}


// Function to generate permutations iteratively
function getPermutationsIterative(arr) {
  // Start with one empty permutation
  let result = [[]];

  // Process each number in the input array
  for (let num of arr) {
    const newPermutations = [];

    // For each existing permutation
    for (let perm of result) {
      // Insert the current number into every possible position
      for (let i = 0; i <= perm.length; i++) {
        const newPerm = [...perm.slice(0, i), num, ...perm.slice(i)];
        newPermutations.push(newPerm);
      }
    }

    // Update result with all new permutations generated in this round
    result = newPermutations;
  }

  return result;
}

// Example usage:
console.log(getPermutationsIterative([1, 2, 3]));
// Output:
// [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]



// Function to generate all permutations of an array
function getPermutations(arr) {
  // Base case:
  // If there's only one element in the array,
  // the only permutation is the array itself
  if (arr.length === 1) {
    return [arr];
  }

  const result = []; // To store all permutations

  // Loop through every element in the array
  for (let i = 0; i < arr.length; i++) {
    // Choose the current element as the "fixed" one
    const fixedElement = arr[i];

    // Get the remaining elements (excluding the fixed one)
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));

    // Recursively get all permutations of the remaining elements
    const smallerPermutations = getPermutations(remaining);

    // Add the fixed element in front of each smaller permutation
    for (let perm of smallerPermutations) {
      result.push([fixedElement, ...perm]);
    }
  }

  // Return all permutations found
  return result;
}

// Example usage:
console.log(getPermutations([1, 2, 3]));
// Output:
// [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]


// BEST VERSION
function nextPermutationBest(nums) {
  let index = -1;
  const n = nums.length;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return nums.reverse();
  }

  for (let i = n - 1; i > index; i--) {
    if (nums[i] > nums[index]) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      break;
    }
  }

  const firstPortion = nums.slice(0, index + 1);
  console.log(firstPortion);

  const secondPortion = nums.slice(index + 1);
  secondPortion.reverse();

  return firstPortion.concat(secondPortion);
}
