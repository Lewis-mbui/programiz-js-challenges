/*
A Disarium number is a number in which the sum of its 
digits powered with their respective position is equal 
to the original number.

e.g 89 --> 8^1 + 9^2 = 89
*/

const num = 598;
console.log(checkDisarium(num));

/*
function checkDisarium(num) {
  let sum = 0;
  const digits = num.toString().split("");
  for (let i = 1; i <= digits.length; i++) {
    sum += digits[i - 1] ** i;
  }
  
  return (sum === num) ? "Disarium" : "Not Disarium";
}
*/

function checkDisarium(num) {
  const sum = num
    .toString()
    .split("")
    .map((digit, index) => Number(digit) ** (index + 1))
    .reduce((a, b) => a + b, 0);

  return sum === num ? "Disarium" : "Not Disarium";
}