// Write a function to check if a number is an Armstrong number.

// An Armstrong number of three digits is an integer such 
// that the sum of the cubes of its digits is equal to 
// the number itself.

// For example, 371 is an Armstrong number 
// since 3**3 + 7**3 + 1**3 = 371

const num = 371;
console.log(checkArmstrongNumber(num));

function checkArmstrongNumber(num) {
  const str = num.toString().split('');

  const total = str.reduce((prev, char) => {
    return Math.pow(Number(char), 3) + prev;
  }, 0);

  return (total === num) ? "Armstrong" : "Not Armstrong";
}