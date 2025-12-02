// Write a function to calculate the percentage change 
// between two numbers.
// The formula for calculating percentage change is: 
// ((newNum - oldNum) / oldNum) * 100

const oldNum = 50;
const newNum = 75;
console.log(calculatePercentageChange(oldNum, newNum));


function calculatePercentageChange(oldNum, newNum) {
  return ((newNum - oldNum) / oldNum) * 100;
}