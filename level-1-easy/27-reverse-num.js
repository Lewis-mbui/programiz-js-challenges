// Write a function to reverse a number.

const num = 1234;
console.log(reverseNumber(num));

function reverseNumber(num) {
  const str = num.toString().split('');
  const n = str.length;
  let result = '';

  for (let i = 0; i < n; i++)
    result += str.pop()

  return Number(result);
}

/*
function reverseNumber(num) {
  const reversed = Number(Math.abs(num).toString().split('').reverse().join(''));
  return num < 0 ? -reversed : reversed;
}
*/