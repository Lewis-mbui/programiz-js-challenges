// Write a function to find the first non-repeating  element 
// in an array.
// Return the first non-repeating element in the array, if no
// element appears only once, return -1

// const arr = [2, 13, 4, 2, 13]
const arr = [22, 13, 15, 11, 22, 13]
console.log(singleOccurrence(arr));


function singleOccurrence(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }

    if (count === 1) return arr[i];
  }

  return -1;
}

/*
function singleOccurrence(arr) {
  const freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of arr) {
    if (freq[num] === 1) return num;
  }

  return -1;
}
*/