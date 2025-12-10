// Write a function to check if the last item of an array is 
// the same as the concatenation of all other items.

const arr = ["abc", "def", "abcdef"];
console.log(matchLastItem(arr));

function matchLastItem(arr) {
  const n = arr.length;
  const str = arr.slice(0, n - 1).join('');
  return str === arr[n - 1] ? 'Match' : 'No match';
}