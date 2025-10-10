// Write a function to move all zeros in an array to the end.

const arr1 = [0, 6, 0, 2, 0];
const arr2 = [6, 0, 7, 4, 0, 2, 8];
console.log(moveZerosToEnd(arr1));

function moveZerosToEnd(arr) {
  return arr.filter(value => value !== 0)
    .concat(arr.filter(value => value === 0));
}

/*
function moveZerosToEnd(array) {
  let insertPos = 0;
  const arr = [...array];

  // Step 1: move all non-zero elements forward
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }
  console.log(arr);

   // Step 2: fill the rest with zeros
  while (insertPos < arr.length) {
    arr[insertPos] = 0;
    insertPos++;
  }

  return arr;
}
*/