// Write a function to find the index of an element in an array.

// Return the index of element in array  if it is found, 
// otherwise return -1

const arr = [2, 4, 6, 8, 10];
const element = 6;
console.log(findElementIndex(arr, element));

function findElementIndex(arr, element) {
  return arr.indexOf(element);
}

/*
function findElementIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (val === element) return i;
  }

  return -1;
}
*/