// Write a function to multiply two matrices
// e.g. for inputs: matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] and
// matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// result --> [[30, 36, 42], [66, 81, 96], [102, 126, 150]]

const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(multiplyMatrices(matrix1, matrix2));

function multiplyMatrices(A, B) {
  // Step 1️⃣: Validate if multiplication is possible
  // For matrix multiplication, number of columns in A must equal number of rows in B
  const rowsA = A.length;
  const colsA = A[0].length;
  const rowsB = B.length;
  const colsB = B[0].length;

  if (colsA !== rowsB) {
    throw new Error("Matrix multiplication not possible: columns of A must match rows of B");
  }

  // Step 2️⃣: Create an empty result matrix filled with zeros
  // It will have 'rowsA' rows and 'colsB' columns
  const result = [];
  for (let i = 0; i < rowsA; i++) {
    result[i] = new Array(colsB).fill(0);
  }

  // Step 3️⃣: Multiply A and B
  // We'll calculate each cell of the result matrix one by one
  // result[i][j] = sum of (A[i][k] * B[k][j]) for all k
  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        // Multiply corresponding elements and add to the current cell
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  // Step 4️⃣: Return the resulting matrix
  return result;
}


/*
function multiplyMatrices(matrix1, matrix2) {
  const colsA = matrix1[0].length;
  const rowsA = matrix1.length;
  const colsB = matrix2[0].length;
  const rowsB = matrix2.length;
  const result = [];

  if (colsA !== rowsB) 
    throw('Columns in matrix 1 should be equal to rows in matrix 2');

  for (let i = 0; i < rowsA; i++)
    result[i] = new Array(colsB).fill(0);

  for (let i = 0; i < rowsA; i++)
    for (let j = 0; j < colsB; j++)
      for (let k = 0; k < rowsB; k++)
        result[i][j] += matrix1[i][k] * matrix2[k][j];

  return result;
}
*/