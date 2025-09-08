// Write a function to find the first and last index of a given number in an array.
const arr = [10, 20, 30, 20, 25, 20, 33];
const num = 20;


console.log(findFirstAndLast(arr, num));

/*
function findFirstAndLast(arr, num) {
  const output = [];
  let firstIndex, lastIndex = null;
  let found = false;
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num && !found) {
      firstIndex = i;
      found = true;
    }
    if (arr[i] === num) lastIndex = i;
  }

  output.push(firstIndex, lastIndex);
  return output;
}

function findFirstAndLast(arr, num) {
  let firstIndex = -1, lastIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      if (firstIndex === -1) firstIndex = i; // will be set for the first occurrence of num
      lastIndex = i;
    }
  }

  return [firstIndex, lastIndex];
}
*/

function findFirstAndLast(arr, num) {
  return [arr.indexOf(num), arr.lastIndexOf(num)];
}
