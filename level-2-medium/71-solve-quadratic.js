const a = 1;
const b = -5;
const c = 6;
console.log(solveQuadratic(a, b, c));

function solveQuadratic(a, b, c) {
  const root1 = (-b + Math.sqrt(b ** 2 - (4 * a * c))) / 2 * a;
  const root2 = (-b - Math.sqrt(b ** 2 - (4 * a * c))) / 2 * a;

  return [root1, root2];
}