// Write a function to find the nth Fibonacci number.
// Fibonacci is a sequence of numbers where each number is 
// the sum of the two preceding ones, starting from 0 and 1
// the first few terms of the Fibonacci sequence are 
// 0, 1, 1, 2, 3, 5, 8, 13
// Return the nth fibonacci number

const n = 3;
console.log(fibonacci(n));

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;

  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }

  return b;
}

/*
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
*/