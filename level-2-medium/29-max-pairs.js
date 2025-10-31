// Write a function to find the maximum number of 
// pairs that can be formed from an array.
// e.g for the input: [5, 5, 5, 5] --> output: 2

const arr = [4, 5, 5, 3, 2];
console.log(maxPairs(arr));


function maxPairs(arr) {
  // create an object with each num as key and value
  // of how many times it appears in the array
  const freq = arr.reduce((prev, num) => {
    prev[num] = (prev[num] || 0) + 1;
    return prev;
  }, {});

  // add all pairs
  return Object.values(freq)
    .reduce((prev, value) => {
      return prev + Math.floor(value / 2);
    }, 0);
}

/*
function maxPairs(arr) {
  arr.sort((a, b) => a - b);
  let count = 0;
  let i = 0;

  while (i < arr.length - 1) {
    if (arr[i] === arr[i + 1]) {
      count++;
      i += 2;
    } else {
      i++;
    }
  }

  return count;
}
*/