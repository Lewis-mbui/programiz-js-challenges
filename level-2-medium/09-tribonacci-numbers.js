// Write a function to calculate the nth number 
// in the Tribonacci sequence.
console.log(tribonacci(7));


function tribonacci(n) {
  const arr = [0, 1, 1];

  if (arr.length > n) return arr[n];

  while (arr.length <= n) {
    let sum = 0;

    for (let i = arr.length - 1; i >= arr.length - 3; i--) 
      sum += arr[i]

    arr.push(sum);
  }

  return arr[n];
}

/*
function tribonacci(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let a = 0, b = 1, c = 1;

  for (let i = 3; i <= n; i++) {
    const next = a + b + c;
    a = b;
    b = c;
    c = next;
  }

  return c;
}
*/

/*
function tribonacci(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}
*/