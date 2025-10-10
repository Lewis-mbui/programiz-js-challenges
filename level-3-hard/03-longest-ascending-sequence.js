// Write a function to find the longest 
// ascending sequence in an array.
const arr = [1, 2, 3, 4, 2, 3, 4, 5]
console.log(findLongestAscendingSequence(arr));

function findLongestAscendingSequence(arr) {
  let maxCount = 1;       // at least one element in a sequence
  let currentCount = 1;   // current streak starts at 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 1; // reset streak
    }
  }

  return maxCount;
}

/*
function findLongestAscendingSequence(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) currentCount++;
    else {
      if (currentCount > maxCount) maxCount = currentCount;
      currentCount = 0;
    }
  }
  
  return maxCount + 1;
}
*/