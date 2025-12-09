// Write a function to calculate the sum of the absolute 
// differences between every pair of elements in an array.

// const arr = [10, 30, 20];
const arr = [4, 5, 10]
console.log(sumPairDifferences(arr));


function sumPairDifferences(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum += Math.abs(arr[i] - arr[j]);
    }
  }

  return sum;
}

/* 
function sumPairDifferences(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let sum = 0;
  
  // Each number contributes positively and negatively based on its position.
  for (let i = 0; i < sorted.length; i++) {
    const countBefore = i;
    const countAfter = sorted.length - 1 - i;

    // Contribution formula:
    sum += sorted[i] * (countAfter - countBefore);
  }

  return sum;
}

*/