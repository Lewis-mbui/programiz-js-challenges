// Write a function to check if one array can be nested in 
// another.
// One array can be nested within another if:
// 1. The minimum value of the first array is greater than 
//    the minimum value of the second array.
// 2. The maximum value of the first array is less than 
//    the maximum value of the second array.
// Return true if array1 can be nested in array2. Otherwise 
// return false.

const array1 = [1, 2, 3, 4];
const array2 = [0, 6];
console.log(canBeNested(array1, array2));

function canBeNested(array1, array2) {
  const max1 = Math.max(...array1);
  const max2 = Math.max(...array2);
  const min1 = Math.min(...array1);
  const min2 = Math.min(...array2);

  return (min1 > min2) && (max1 < max2);
}

/*
// Helper function to extract min & max
const getRange = arr => ({
  min: Math.min(...arr),
  max: Math.max(...arr)
});

function canBeNested(arr1, arr2) {
  // Destructure min/max directly from returned objects
  const { min: min1, max: max1 } = getRange(arr1);
  const { min: min2, max: max2 } = getRange(arr2);

  // Condition for nesting
  return min1 > min2 && max1 < max2;
}
*/