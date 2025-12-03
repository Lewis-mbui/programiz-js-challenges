// Write a function to check if two lines are parallel.
// Two lines are parallel if their slopes are equal

const line1 = [1, 2, 3, 4];
const line2 = [5, 6, 7, 8];
console.log(checkParallel(line1, line2));


function checkParallel(line1, line2) {
  // Helper function to compute slope safely
  const getSlope = ([x1, y1, x2, y2]) => {
    // Handle vertical lines (undefined slope)
    if (x2 === x1) return Infinity;
    return (y2 - y1) / (x2 - x1);
  };

  const slope1 = getSlope(line1);
  const slope2 = getSlope(line2);

  return slope1 === slope2 ? "Parallel" : "Not Parallel";
}

/*
function checkParallel(line1, line2) {
  const [x1, y1, x2, y2] = line1;
  const [a1, b1, a2, b2] = line2;

  // Compute direction vectors
  const dx1 = x2 - x1;
  const dy1 = y2 - y1;
  const dx2 = a2 - a1;
  const dy2 = b2 - b1;

  // Cross-multiplication avoids division & handles vertical lines
  const parallel = dy1 * dx2 === dy2 * dx1;

  return parallel ? "Parallel" : "Not Parallel";
}

*/