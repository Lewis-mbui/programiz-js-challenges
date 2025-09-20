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
    
}