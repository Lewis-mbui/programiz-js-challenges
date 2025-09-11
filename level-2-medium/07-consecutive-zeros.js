// Write a function to find the longest 
// consecutive zeros in a binary string.

const str = "11100001"

console.log(longestConsecutiveZeros(str));

function longestConsecutiveZeros(str) {
  // Split the string at every '1'
  // Example: "101001000" -> ["0", "00", "000"]
  const zeroGroups = str.split('1');

  // Find the length of the longest zero-group
  const lengths = zeroGroups.map(group => group.length);

  return Math.max(...lengths);
}

/* 
function longestZeroRun(str) {
  // Keep track of the current run of zeros
  let currentCount = 0;

  // Keep track of the longest run we have seen
  let maxCount = 0;

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      // We found a zero, so increase the current run
      currentCount++;

      // If this run is longer than the previous max, update maxCount
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      // We hit a non-zero, so reset the current run
      currentCount = 0;
    }
  }

  // After scanning the whole string, maxCount holds the answer
  return maxCount;
}
*/

/*
function longestZeroRun(str) {
  return Math.max(...str.split('1').map(z => z.length));
}
*/