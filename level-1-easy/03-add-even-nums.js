// Write a function to add even numbers from 1 to n (inclusive).

const n = 10;
console.log(addEvenNumbers(n));

function addEvenNumbers(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) 
    if (i % 2 === 0) sum += i;

  return sum;
}