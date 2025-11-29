// Write a function to find the cell location of 
// Tic-Tac-Toe Board.
// E.g. for the input "A3" the result should be [2, 0]

const cellStr = 'C3';
console.log(getRowCol(cellStr));

function getRowCol(cell) {
  const cols = "ABC";

  if (cell.length !== 2) throw new Error("Invalid");

  const [colChar, rowChar] = cell.toUpperCase();
  const col = cols.indexOf(colChar);
  const row = parseInt(rowChar);

  if (col === -1 || Number.isNaN(row) || row < 1 || row > 3)
    throw new Error("Invalid");

  return [row - 1, col];
}

