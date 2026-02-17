// Write a function to calculate the difference between two 
// colors.
const color1 = [255, 255, 255];
const color2 = [0, 0, 0];
console.log(calculateColorDifference(color1, color2));

function calculateColorDifference(color1, color2) {
  const [r1, g1, b1] = color1;
  const [r2, g2, b2] = color2;

  return Number((Math.sqrt((r1-r2)**2 + (g1-g2)**2 + (b1-b2)**2)).toFixed(3));
}