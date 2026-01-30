// Write a function to check whether a number is both a cube 
// and a square number.

const num = 729;
console.log(isCubeAndSquare(num));

function isCubeAndSquare(num) {
  let isCube = false, isSquare = false;

  for (let i = 1; i * i <= num; i++) {
    if (i * i * i === num) isCube = true;
    if (i * i === num) isSquare = true;

    if (isCube && isSquare) return true;
  }

  return false;
}

/*
function isCubeAndSquare(num) {
  // Get the square root
  const squareRoot = Math.sqrt(num);

  // Get the cube root
  const cubeRoot = Math.cbrt(num);

  // Check if both roots are integers
  return Number.isInteger(squareRoot) && Number.isInteger(cubeRoot);
}
*/

/*
function isCubeAndSquare(num) {
  // Sixth root of the number
  const sixthRoot = Math.pow(num, 1 / 6);

  // Check if the sixth root is an integer
  return Number.isInteger(sixthRoot);
}
*/