// Write a function to calculate the nth number in a 
// Jacobsthal sequence.
// The Jacobsthal sequence is defined as: 
// jacobsthal(n) = jacobsthal(n-1) + 2*jacobsthal(n-2)
// e.g. jacobsthal(2) = jacobsthal(1) + 2 * jacobsthal(0) = 1 + 2 * 0 = 1

const n = 6;
console.log(jacobsthal(n));

/*
function jacobsthal(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const c = b + (2 * a);
    a = b;
    b = c;
  }

  return b;
}*/

function jacobsthal(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return jacobsthal(n - 1) + 2 * jacobsthal(n - 2);
}