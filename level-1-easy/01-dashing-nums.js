// Write a function to convert a number into a string with dashes between each digit.

console.log(dashingNumbers(0));

function dashingNumbers(num) {
    return num.toString()
    .split("")
    .join("-");
}