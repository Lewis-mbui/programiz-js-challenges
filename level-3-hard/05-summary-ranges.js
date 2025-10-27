// Write a function to generate summary 
// ranges for consecutive numbers.
// e.g for the input: 
// nums[] = [34, 41, 42, 43, 15, 16, 17]
// output:
// [ '34', '41->43', '15->17']
// and for the input: [1, 2, 3, 4, 5, 8, 14, 16, 17, 18, 43, 42, 41, 40]
// output: ['1->5', '8', '14', '16->18', '43->40']

const nums = [34, 41, 42, 43, 15, 16, 17];

console.log(summaryRanges(nums));

function summaryRanges(nums) {
  const output = [];  // stores the final list of ranges
  let start = 0;      // index where the current range begins

  // loop through the array, one step ahead of the current element
  // notice we go until nums.length (inclusive) so we can handle the last range
  for (let i = 1; i <= nums.length; i++) {
    // If:
    // 1. we've reached the end of the array OR
    // 2. the current number is NOT consecutive with the previous one
    if (i === nums.length || Math.abs(nums[i] - nums[i - 1]) !== 1) {
      
      // If the range has only one element (start === i - 1),
      // just push that single number
      if (start === i - 1) {
        output.push(`${nums[start]}`);
      } 
      // Otherwise, push it as "start->end"
      else {
        output.push(`${nums[start]}->${nums[i - 1]}`);
      }

      // Start a new range from the current index
      start = i;
    }
  }

  return output;
}

/*
const nums = [1, 2, 3, 4, 5, 8, 14, 16, 17, 18, 43, 42, 41, 40];
console.log(summaryRanges(nums));


function summaryRanges(nums) {
  const output = [];
  const consecutives = [];
  for (let i = 0; i < nums.length; i++) {
    consecutives.push(nums[i]);
    if (nums[i + 1] === nums[i] + 1 || nums[i + 1] === nums[i] - 1) {
      consecutives.push(nums[i + 1]);
    } else {
      if (consecutives.length < 2) {
        output.push(`${nums[i]}`);
        consecutives.length = 0;
      } else {
        output.push(`${consecutives[0]}->${consecutives[consecutives.length-1]}`);
        consecutives.length = 0;
      }
    }
  }

  return output;
}
*/