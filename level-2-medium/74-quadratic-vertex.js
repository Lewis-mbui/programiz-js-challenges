// Write a function to find the vertex of a quadratic equation.

const a = 1;
const b = -3;
const c = 2;
console.log(findVertex(a, b, c));

function findVertex(a, b, c) {
  const h = (-b / (2 * a));
  const k = (h**2) - (3 * 1.5) + 2;

  return [h, k];
}