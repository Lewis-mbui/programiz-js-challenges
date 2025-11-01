// Write a function to solve a quadratic equation

const a = 1, b = -5, c = 6;
console.log(solveQuadratic(a, b, c));

function solveQuadratic(a, b, c) {
  const firstRoot = (-b + Math.sqrt(b ** 2 - (4 * a * c))) / (2 * a);
  const secondRoot = (-b - Math.sqrt(b ** 2 - (4 * a * c))) / (2 * a);
  return [firstRoot, secondRoot];
}