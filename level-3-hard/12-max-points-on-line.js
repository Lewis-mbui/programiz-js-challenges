// Write a function to find the maximum number of points that 
// lie on the same straight line.

// If two points lie on the same straight line, 
// the slope between them will be the same.

// For example, for the slope between the following 
// points are equal (i.e, 2) -> [[2, 2], [4, 6], [5, 8], [6, 10]]

// For this input: [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]
// the result should be: 4 i.e. 4 
// points --> [3, 2] [4, 1] [2, 3], and [1, 4]

// for this input: [[0, 0], [94911151, 94911150], [94911152, 94911151]]
// the result should be: 3 i.e. all three points lie on the same line



// For each anchor point i, we reset a slopes object.
// Each other point j computes (dx, dy), then normalized slope.
// We count slopes in the object.
// Track the local maximum slope count for this anchor.
// Add +1 for the anchor itself, plus duplicates.
// Update the globalMax.


// Helper function to normalize slope
// Ensures that slopes like (2,1) and (4,2) are treated as the same
// Also handles negative directions consistently
function normalizeSlope(dy, dx) {
  if (dx === 0) return [1, 0];    // vertical line
  if (dy === 0) return [0, 1];    // horizontal line

  // Greatest common divisor to reduce fraction
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const g = gcd(Math.abs(dy), Math.abs(dx));

  dy /= g;
  dx /= g;

  // Keep slope direction consistent
  if (dx < 0) {
    dx = -dx;
    dy = -dy;
  }

  return [dy, dx];
}

function maxPoints(points) {
  let globalMax = 0;

  for (let i = 0; i < points.length; i++) {
    const anchor = points[i];
    const slopes = {};  // slope -> count
    let duplicates = 0; // duplicate points

    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = anchor;
      const [x2, y2] = points[j];

      const dx = x2 - x1;
      const dy = y2 - y1;

      if (dx === 0 && dy === 0) {
        duplicates++;
        continue; // skip duplicate point
      }

      const [ny, nx] = normalizeSlope(dy, dx);
      const key = `${ny},${nx}`;

      slopes[key] = (slopes[key] || 0) + 1;
    }

    // find local max slope group for this anchor
    let localMax = 0;
    for (const key in slopes) {
      localMax = Math.max(localMax, slopes[key]);
    }

    // +1 for the anchor itself, +duplicates
    globalMax = Math.max(globalMax, localMax + 1 + duplicates);
  }

  return globalMax;
}


// Case 2: Max number + actual points
// Same slope normalization helper
function normalizeSlope(dy, dx) {
  if (dx === 0) return [1, 0];
  if (dy === 0) return [0, 1];

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const g = gcd(Math.abs(dy), Math.abs(dx));

  dy /= g;
  dx /= g;

  if (dx < 0) {
    dx = -dx;
    dy = -dy;
  }

  return [dy, dx];
}

function maxPointsWithLine(points) {
  let globalMax = 0;
  let bestLinePoints = [];

  for (let i = 0; i < points.length; i++) {
    const anchor = points[i];
    const slopes = {};  // slope -> array of points
    let duplicates = 0;

    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = anchor;
      const [x2, y2] = points[j];

      const dx = x2 - x1;
      const dy = y2 - y1;

      if (dx === 0 && dy === 0) {
        duplicates++;
        continue;
      }

      const [ny, nx] = normalizeSlope(dy, dx);
      const key = `${ny},${nx}`;

      // Initialize with anchor if first time
      if (!slopes[key]) slopes[key] = [anchor];
      slopes[key].push(points[j]);
    }

    for (const key in slopes) {
      const linePoints = slopes[key];
      const total = linePoints.length + duplicates; // include duplicates

      if (total > globalMax) {
        globalMax = total;
        bestLinePoints = linePoints.slice(); // copy
      }
    }

    // Case where all points are duplicates of anchor
    if (1 + duplicates > globalMax) {
      globalMax = 1 + duplicates;
      bestLinePoints = Array(1 + duplicates).fill(anchor);
    }
  }

  return { max: globalMax, points: bestLinePoints };
}


// CORRECT
function maxPoints(points) {
const n = points.length;
  if (n < 3) return n; // 0, 1, 2 points are trivially collinear

  // How many decimal places to round slope values to.
  // This tolerance ensures large numbers that are nearly collinear
  // (like the challenge's example) are treated as collinear.
  const EPS_DIGITS = 12;

  // Helper: build a canonical key for a slope
  function slopeKey(dx, dy) {
    if (dx === 0) return 'v'; // vertical line
    const slope = dy / dx;    // slope as float
    return slope.toFixed(EPS_DIGITS); // round to fixed precision string
  }

  let result = 0;

  // For each point, treat it as the base and compare with all others
  for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];
    const slopes = new Map(); // slopeKey -> count
    let duplicates = 0;       // how many points are identical to base
    let localMax = 0;         // max number of aligned points (excluding base)

    for (let j = i + 1; j < n; j++) {
      const [x2, y2] = points[j];
      const dx = x2 - x1;
      const dy = y2 - y1;

      // If same point, count as duplicate
      if (dx === 0 && dy === 0) {
        duplicates++;
        continue;
      }

      const key = slopeKey(dx, dy);
      const count = (slopes.get(key) || 0) + 1;
      slopes.set(key, count);

      if (count > localMax) localMax = count;
    }

    // +1 for the base point itself, +duplicates for identical points
    result = Math.max(result, localMax + duplicates + 1);
  }

  return result;

}

