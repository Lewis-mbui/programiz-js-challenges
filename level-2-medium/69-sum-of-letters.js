const str = "Code";
console.log(calculateAsciiSum(str));

function calculateAsciiSum(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i);

  return sum;
}