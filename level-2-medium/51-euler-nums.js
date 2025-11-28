// Write a function to calculate the nth Euler number
// Given an integer n, we can find the nth Euler number using 
// the formula: E(n) = (2n - 1)E(n - 1) + (n - 1)E(n - 2)

const n = 4;
console.log(euler(n));


function euler(n) {
  if (n === 0) return 1;
  if (n === 1) return 0;

  let a = 1;
  let b = 0;

  for (let i = 2; i <= n; i++) {
    const c = ((2 * i - 1) * b) + ((i - 1) * a);
    a = b;
    b = c;
  }

  return b;
}

/*
function euler(n) {
  if (n === 0) return 1;
  if (n === 1) return 0;

  return (2 * n - 1) * euler(n - 1) + (n - 1) * euler(n - 2);
}
*/