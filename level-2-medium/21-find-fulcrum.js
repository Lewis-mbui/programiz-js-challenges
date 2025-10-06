// Write a function to find the fulcrum of an array.
// Return the fulcrum of the array if there is one, 
// else return -1

// A fulcrum of an array is an integer such that all elements 
// to the left and all elements to the right sum to the same value.

// e.g. for this input: [3, 1, 5, 2, 4, 6, -1] the result
// should be 2
// Reason: The sum of elements on the left side of 2 (3, 1, 5)
// is 9 and to the right side of 2 (4, 6, -1) is also 9

const arr = [3, 1, 5, 2, 4, 6, -1];
console.log(findFulcrum(arr));

function findFulcrum(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    const currentNum = arr[i];
    // console.log(currentNum);

    const leftSum = arr.slice(0, i)
      .reduce((a, b) => a + b);

    const rightSum = arr.slice(i + 1, arr.length)
      .reduce((a, b) => a + b);

    // if (i === 2) {
    //   console.log(arr.slice(i + 1, arr.length));
    //   console.log(leftSum);
    //   console.log(rightSum);
    // }

    if (leftSum === rightSum) return currentNum;
  }

  return -1;
}

function findFulcrum2(arr) {
  let total = arr.reduce((acc,cur) => acc + cur, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const rightSum = total - leftSum - arr[i]

    if (leftSum === rightSum) {
      return arr[i]
    }

    leftSum += arr[i]
  }

  return -1
}