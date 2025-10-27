// Write a function to check if a number is a Sastry number.

// A Sastry number is a number n where the concatenation of 
// n and n + 1 forms a perfect square
// e.g let's take 183 --> concatenating 183 and n + 1 = 184
// gives 183184, which is a perfect square as 428 ^ 2 = 183184
// If the number is a Sastry number, return true. Otherwise,
// return false

const n = 183;
console.log(isSastryNumber(n));

function isSastryNumber(n) {
  const nextNum = (n + 1).toString();
  const num = Number(n + nextNum);
  const root = Math.sqrt(num);

  return !(root.toString().includes('.'));
}

/*
const isSastryNumber = n => {
  const combined = +`${n}${n + 1}`;
  const sqrt = Math.sqrt(combined);
  return sqrt % 1 === 0;
};
*/