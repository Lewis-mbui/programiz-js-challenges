// Write a function to check if a number 
// is within a given range.
// If the number  is within the range of lowerLimit
//  (inclusive) and upperlimit (inclusive) return: "yes"
// otherwise return "No"

const num = 10;
const lowerLimit = 1;
const upperLimit = 10;

console.log(checkInRange(num, lowerLimit, upperLimit));

function checkInRange(num, lowerLimit, upperLimit) {
  return (num >= lowerLimit && num <= upperLimit)
    ? 'Yes'
    : 'NO';
}

/*
function checkInRange(num, lowerLimit, upperLimit) {
  let found = false

  for (let i = lowerLimit; i <= upperLimit; i++) 
    if (i === num) {
      found = true;
      break;
    }

  return found ? "Yes" : "No";
}
*/