// Write a function to check if two sublists are identical.
// Two subsets are said to be identical if they have the same 
// elements in the same order. For example,

const list1 = [1, 3];
const list2 = [3, 1];
console.log(checkIdenticalSublists(list1, list2));

function checkIdenticalSublists(list1, list2) {
  let isIdentical = true;

  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i])
      isIdentical = false;
  }
  return isIdentical ? "Identical" : "Not identical";
}