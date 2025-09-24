// Write a function to find the count of 
// smaller numbers after each number in an array.

// Given an array , return a new array where each element is 
// the count of smaller elements to the right 
// of the corresponding element in the array

// For example, given [8, 6, 5, 9, 4, 2], the elements 
// of the new array will be: [4, 3, 2, 2, 1, 0]

const nums = [8, 6, 5, 9, 4, 2];

console.log(countSmaller(nums));

function countSmaller(nums) {
  const output = [];

  for (let i = 0; i < nums.length - 1; i++) {
    let lessCount = 0;

    for (let j = i + 1; j < nums.length; j++)
      if (nums[j] < nums[i]) lessCount++;

    output.push(lessCount);
  }

  // for the last element
  output.push(0);
  
  return output;
}