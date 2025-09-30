// Write a function to calculate the mean of 
// all digits in a number.

const num = 12345;
console.log(calculateMean(num));

function calculateMean(num) {
  const str = num.toString();

  return str.split('').reduce((prev, char) => {
    return prev + parseInt(char)}, 0) / str.length;
}

/*
function calculateMean(num) {
  num = [...num.toString()];

  return num.reduce((a, b) => +a + +b, 0) / num.length;
}
*/