// Write a function to calculate the sum of every nth number in an array.

const arr = [10, 20, 30, 40, 50, 60];
const n = 2;

console.log(sumEveryNth(arr, n));

function sumEveryNth(arr, n) {
  let count = 0;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (count === n) {
      sum += arr[i];
      count = 0;
    }
  }

  return sum;
}

// USING REDUCE
/*
function sumEveryNth(arr, n) {
  return arr.reduce((prev, num) => {
    prev[0]++;
    if (prev[0] === n) {
      prev[1] += num;
      prev[0] = 0
    }
    return prev;
  }, [0, 0])[1];
}
*/
