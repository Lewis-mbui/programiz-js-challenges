// Write a function to pile cubes vertically.
// You are given an array where each element represents 
// the size of the cube.
// The cubes are of different sizes and must be piled from 
// largest to smallest.
// Return "Yes" if cubes can be piled up vertically, else return "No"

// const cubes = [7, 7, 4, 1];
const cubes = [5, 4, 3, 2, 1];
// const cubes = [2, 5, 4, 1, 3];
console.log(pileUpCubes(cubes));

function pileUpCubes(cubes) {
  for (let i = 1; i < cubes.length; i++) {
    if (cubes[i] > cubes[i - 1]) return "No";
  }

  return "Yes";
}

/*
function pileUpCubes(cubes) {
  // Create a copy because sort() mutates the array
  const sorted = [...cubes].sort((a, b) => b - a);

  // If sorting descending gives the same arrangement,
  // the cubes are already stackable
  return JSON.stringify(sorted) === JSON.stringify(cubes)
    ? "Yes"
    : "No";
}
*/

/*
function pileUpCubes(cubes) {
  // Helper: checks if an array is in non-increasing order
  const isDescending = (arr) =>
    arr.every((val, i) => i === 0 || val <= arr[i - 1]);

  // Check the condition
  return isDescending(cubes) ? "Yes" : "No";
}
*/