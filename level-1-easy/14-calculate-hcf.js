// Write a function to calculate HCF of two numbers.
const num1 = 36;
const num2 = 18;

console.log(hcf(num1, num2));

function hcf(num1, num2) {
  let maxFactor = 1;

  if (num1 === num2) return num1;

  const limit = num1 < num2 ? num1 : num2;

  for (let i = 1; i <= limit; i++) {
    if (num1 % i === 0 && num2 % i === 0)
      maxFactor = i;
  }

  return maxFactor;
}

/*
function hcfEuclidean(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(hcfEuclidean(12, 18)); // 6
*/

/*
function hcfRecursive(a, b) {
  if (b === 0) return a;
  return hcfRecursive(b, a % b);
}

console.log(hcfRecursive(12, 18)); // 6
*/

/*
function hcfMultiple(...numbers) {
  const hcfTwo = (a, b) => b === 0 ? a : hcfTwo(b, a % b);
  return numbers.reduce((acc, num) => hcfTwo(acc, num));
}

console.log(hcfMultiple(12, 18, 24)); // 6
*/