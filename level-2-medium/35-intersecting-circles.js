// Write a function to check if two circles intersect 
// with each other.

// Two circles intersect when the distance between their 
// centers is less than the sum of their radii.
// For example, consider two circles: one with its center at 
// (0, 0) and a radius of 5, and another with its center at (4, 4)
// and a radius of 3
// Here, the sum of their radii is 5 + 3 = 8, which is greater than 
// the distance between their centers (sqrt((4-0)^2 + (4-0)^2) = 5.657)
// Thus the circles intersect

const c1 = [1, 1]
const r1 = 2
const c2 = [5, 5]
const r2 = 1

console.log(circlesIntersect(c1, r1, c2, r2));

function circlesIntersect(c1, r1, c2, r2) {
  const sum = r1 + r2;
  const [x1, y1] = c1;
  const [x2, y2] = c2;

  const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

  return distance < sum;
}