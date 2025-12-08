// Write a function to find the symmetric difference of 
// two arrays.
// The symmetric difference of two sets is the set of 
// elements that are in either set, but not in both.
// e.g. A = [1, 2, 3]  and B = [2, 3, 4] the symmetric difference
// of A and B  is [1, 4]

const arr1 = [1, 2, 3];
const arr2 = [3, 4];
console.log(findSymmetricDifference(arr1, arr2))

function findSymmetricDifference(arr1, arr2) {
  const result = [];

  for (let num of arr1)
    if (!arr2.includes(num)) result.push(num);

  for (let num of arr2)
    if (!arr1.includes(num)) result.push(num);

  return result;
}

/*
const findSymmetricDifference = (a, b) => [
  ...a.filter(x => !b.includes(x)),
  ...b.filter(x => !a.includes(x))
];
*/


/*
function findSymmetricDifference(arr1, arr2) {
  const A = new Set(arr1);
  const B = new Set(arr2);

  const diff = (setA, setB) =>
    [...setA].filter(x => !setB.has(x));

  return [...diff(A, B), ...diff(B, A)];
}
*/