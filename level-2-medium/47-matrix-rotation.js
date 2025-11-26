// Write a function to rotate a matrix.
// Given a 2d array, rotate it in 90 degrees 
// clockwise direction and return the resulting array.
// For example, given [[10, 10, 10], [20, 20, 20], [30, 30, 30]]
// the result is [[30, 20, 10], [30, 20, 10], [30, 20, 10]]

// const matrix = [[1, 2], [3, 4], [5, 6]];
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotate(matrix));


function rotate(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // create a new array to store result
  const result = [];
  let k = rows; //variable for looping through the result array

  for (let i = 0; i < cols; i++) {
    result[i] = Array(rows).fill(0);
  }

  for (let i = 0; i < rows; i++) {
    k--;
    for (let j = 0; j < cols; j++) {
      result [j][k] = matrix[i][j];
    }
  }

  return result;
}

/*
function rotate(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = Array.from({ length: cols }, () => Array(rows).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      result[c][rows - 1 - r] = matrix[r][c];
    }
  }

  return result;
}
*/


// FOR SQUARE MATRICES COMMON INTERVIEW SOLUTION
/*
function rotate(matrix) {
  const n = matrix.length;

  // transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // reverse each row
  for (let row of matrix) {
    row.reverse();
  }

  return matrix;
}
*/