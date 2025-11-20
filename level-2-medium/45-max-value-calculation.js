// Write a function to calculate the maximum value 
// that's possible either through addition or multiplication.
// return the maximum value you can calculate by only performing 
// either addition or multiplication between the digits.

const str = '113';
console.log(calculateMaxValue(str));

function calculateMaxValue(str) {
  const digits = [...str].map(Number);
  return Math.max(
    digits.reduce((a, b) => a * b, 1),
    digits.reduce((a, b) => a + b, 0)
  );
};

/*
function calculateMaxValue(str) {
  const arr = str.split('');

  const product = arr.reduce((prev, char) => {
    return prev * +char;
  }, 1);

  const sum = arr.reduce((prev, char) => {
    return prev + +char;
  }, 0);

  return product > sum ? product : sum;
}
*/