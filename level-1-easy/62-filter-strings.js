// Write a function to filter out all strings that contain 
// the letter 'a'.

const arr = ["apple", "banana", "cherry", "date"];
console.log(filterStrings(arr));

function filterStrings(arr) {
  return arr.filter(word => !word.includes('a'));
}