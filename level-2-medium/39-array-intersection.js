// Write a function to find the intersection of two arrays.

// An intersection is the collection of only common 
// elements of two arrays.

// For example, consider two arrays [20, 10, 30] and [10, 30, 40, 50]
// Their intersection is [10, 30]

const arr1 = [10, 20, 30, 40];
const arr2 = [30, 40, 50, 60];
console.log(arrayIntersection(arr1, arr2));

// BEGINNER VERSION

function arrayIntersection(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }

  return result;
}

// ADVANCED: SETS
/*
function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const result = [];

  for (let num of set1) {
    if (set2.has(num)) result.push(num);
  }

  return result;
}
*/