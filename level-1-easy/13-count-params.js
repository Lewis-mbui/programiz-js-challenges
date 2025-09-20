// Write a function to count the number of 
// parameters passed to it.

console.log(countParameters('j', 'k'));

function countParameters(...args) {
  return args.length;
}