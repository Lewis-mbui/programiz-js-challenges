// Write a function that merges two integer arrays 
// and returns the sorted result.
// e.g for input array1 = [3, 1, 6]
// array2 = [4, 19] output --> [1, 3, 4, 6, 19]

const arr1 = [3, 1, 6];
const arr2 = [4, 19];
console.log(mergeAndSortArrays(arr1, arr2));



function mergeAndSortArrays(array1, array2) {
  const output = [];
  let insertPos = 0;

  for (let i = 0; i < array1.length; i++) {
    output[insertPos] = array1[i];
    insertPos++;
  }
  
  for (let i = 0; i < array2.length; i++) {
    output[insertPos] = array2[i];
    insertPos++;
  }

  let n = output.length;

  while (n > 0) {
    for (let i = 0; i < n - 1; i++) {
      const current = output[i];
      const next = output[i + 1];

      if (current > next)
        [output[i], output[i + 1]] = [next, current];
    }

    n -= 1;
  }

  return output;
}

// BUBBLE SORT ALGORITHM
/*
function bubbleSort(arr) {
  const output = [...arr];
  let n = output.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (output[i] > output[i + 1]) {
        [output[i], output[i + 1]] = [output[i + 1], output[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return output;
}
*/ 