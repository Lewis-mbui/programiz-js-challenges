// Write a function to find all the subsets that add up to a target.
// Given an array of distinct integers "arr" and an interger "target",
// return all possible subsets of the array that add up to "target"

// Each subset must be unique and arranged in ascending order

// For example, given [2, 3, 6, 7] and target 9, 3 + 6 = 9 and 
// 2 + 7 = 9. So, the result is [[2, 7], [3, 6]]
// For this input: arr[] = [10, 20, 30, 40, 50] target = 100
// the result is: [[10, 20, 30, 40], [10, 40, 50], [20, 30, 50]]

const arr = [2, 3, 6, 7, 4];
const target = 9;
console.log(subsetSum(arr, target));

function subsetSum(arr, target) {
  // This will store all valid subsets we discover
  const results = [];

  /**
   * A depth-first search (DFS) function to explore subsets.
   *
   * @param {number} startIndex - the current position in the array we’re exploring
   * @param {Array} currentSubset - the subset we’ve built so far
   * @param {number} currentSum - the sum of the currentSubset
   */
  function dfs(startIndex, currentSubset, currentSum) {
    // --- Base Cases (where recursion stops) ---

    // Case 1: If the sum of the subset equals the target,
    // we found a valid subset → save a copy of it.
    if (currentSum === target) {
      results.push(currentSubset.slice()); // use slice() to copy, not reference
      return; // stop exploring this branch
    }

    // Case 2: If the sum is greater than the target, OR
    // if we’ve gone past the last index of the array,
    // there’s no point in exploring further → stop.
    if (currentSum > target || startIndex >= arr.length) {
      return;
    }

    // --- Recursive Exploration ---

    // OPTION 1: Include the current element (arr[startIndex]) in the subset.
    // Step 1: Add it to our working subset.
    currentSubset.push(arr[startIndex]);

    // Step 2: Recurse deeper → move to the next index,
    // update the sum with the included value.
    dfs(startIndex + 1, currentSubset, currentSum + arr[startIndex]);

    // Step 3: Backtrack → remove the last element
    // so the subset returns to its state before including arr[startIndex].
    currentSubset.pop();

    // OPTION 2: Skip the current element.
    // Don’t modify the subset, just move to the next index.
    dfs(startIndex + 1, currentSubset, currentSum);
  }

  // Start recursion from index 0 with an empty subset and sum = 0.
  dfs(0, [], 0);

  // After exploring all possibilities, return all valid subsets.
  return results;
}