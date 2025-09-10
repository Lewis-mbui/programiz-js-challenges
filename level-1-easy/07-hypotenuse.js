// Write a function to calculate the hypotenuse of a right triangle.
const a = 3;
const b = 4;
console.log(calculateHypotenuse(a, b));


function calculateHypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}