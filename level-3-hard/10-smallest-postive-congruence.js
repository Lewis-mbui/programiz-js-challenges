// Write a function to find the smallest positive integer congruence.

// The smallest positive integer congruence is the least positive 
// integer that, when divided by each element of a given array,
//  yields specific remainders.

// For instance, given nums = [30, 40, 50] and rems = [20, 30, 10],
// 110 is the smallest positive integer congruence as:
// 110 % 30 = 20
// 110 % 40 = 30
// 110 % 50 = 10
// Thus, the smallest positive integer congruence is 110
// Return the smallest positive integer 
// congruence for the given two arrays

const nums = [30, 40, 50];
const rems = [20, 30, 10];

console.log(findMinX(nums, rems));

function findMinX(nums, rems) {
  let candidate = 1;

  while (true) {
    // Assume candidate is valid until proven otherwise
    let valid = true;

    for (let i = 0; i < nums.length; i++) {
      // Check if candidate % nums[i] == rems[i]
      if (candidate % nums[i] !== rems[i]) {
        valid = false;
        break; // no need to check further
      }
    }

    if (valid) return candidate; // Found the answer!
    candidate++; // Try the next number
  }
}