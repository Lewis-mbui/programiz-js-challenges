// Write a function to move all zeros in an array to the end.

const arr1 = [0, 6, 0, 2, 0];
const arr2 = [6, 0, 7, 4, 0, 2, 8];
console.log(moveZerosToEnd(arr1));

function moveZerosToEnd(arr) {
  return arr.filter(value => value !== 0)
    .concat(arr.filter(value => value === 0));
}

/*
function moveZerosToEnd(arr) {
  // We are at the first index and aiming
  // to move to last index
  let checkIndex = 0;
  let moveIndex = arr.length - 1;

  // move from checkIndex to moveIndex
  while (checkIndex < moveIndex) {
    //If there is a 0 where we are check if target has 0
    if (arr[checkIndex] === 0){
      if (arr[moveIndex] === 0) {
        moveIndex-- // target has 0 so update the index
      } else {
        // if target index is not a 0 shift the 
        // number to that position and update target
        shiftRight(arr, checkIndex, moveIndex);
        moveIndex--;
      }
    } else {
      // if there is no 0 where we are
      // update the check index
      checkIndex++;
    }
  }
  return arr;
}

function shiftRight(arr,originIndex, destinationIndex) {
  // continue swapping values until the indices match
  while(originIndex !== destinationIndex) {
    let a = arr[originIndex];
    arr[originIndex] = arr[originIndex + 1];
    arr[originIndex + 1] = a;
    originIndex++;
  }
}


function moveZerosToEnd(arr) {
  let insertPos = 0;

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

  console.log(arr);
}

*/