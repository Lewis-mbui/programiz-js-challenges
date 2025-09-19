// Write a function to check if a string is empty.
// Note:  A string with only spaces is still considered non-empty.
const str = " ";
console.log(checkIfEmpty(str));

function checkIfEmpty(str) {
  return (str ? "Not Empty" : "Empty");
}