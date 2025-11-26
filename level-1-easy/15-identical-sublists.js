// Write a function to check if two sublists are identical.
// Two subsets are said to be identical if they have the same 
// elements in the same order. For example,

const list1 = [1, 3];
const list2 = [3, 1];
console.log(checkIdenticalSublists(list1, list2));

function checkIdenticalSublists(list1, list2) {
  // First, check if lengths are equal
  if (list1.length !== list2.length) {
    return "Not Identical";
  }

  // Compare elements one by one
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return "Not Identical";
    }
  }

  // All elements matched
  return "Identical";
}

/*
function checkIdenticalSublists(list1, list2) {
  if (list1.length !== list2.length) return "Not Identical";

  return list1.every((val, index) => val === list2[index])
    ? "Identical"
    : "Not Identical";
}
*/
