// Write a function to check if a string contains spaces.
const str = 'hello world';
console.log(checkSpaceInString(str));


function checkSpaceInString(str) {
  return str.split("").includes(" ") ? "space" : "No Space";
}