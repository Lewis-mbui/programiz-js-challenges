// Write a function to list all perfect iterated squares of n.
// const n = 6561;
const n = 65536;
console.log(perfectIteratedSquares(n));

function perfectIteratedSquares(n) {
  const result = [];

  while (true) {
    const root = Math.sqrt(n);

    // If not a perfect square, stop immediately
    if (!Number.isInteger(root)) {
      break;
    }

    result.push(root);

    // Move to next iteration
    n = root;

    // Stop if we reach 1
    if (n === 1) break;
  }

  return result;
}

/*
function perfectIteratedSquares(n) {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error("Input must be a positive integer.");
  }

  const result = [];

  while (n > 1) {
    const root = Math.sqrt(n);

    // Stop if not a perfect square
    if (!Number.isInteger(root)) break;

    result.push(root);
    n = root;
  }

  return result;
}
*/
