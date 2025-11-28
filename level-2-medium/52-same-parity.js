// Write a function to check if all numbers in an array 
// have the same parity.

const arr = [2, 4, 6];
console.log(isSameParity(arr));

function isSameParity(arr) {
  const first = arr[0] % 2;

  return arr.every(n => n % 2 === first);
}


/* 
function isSameParity(arr) {
  const isEven = arr[0] % 2 === 0;

  for (const num of arr) {
    if ((num % 2 === 0) !== isEven) return false;
  }

  return true;
}
*/