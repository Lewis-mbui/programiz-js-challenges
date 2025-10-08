// Write a function to invert the given color.
// To invert a color:
// - Break the hex code into its RGB components.
// - Invert each RGB component by subtracting 
//   its value from FF (255 in decimal)
// - Combine the inverted RGB components 
//   back into a hexadecimal format.
// For example, given the hex code #123456, the steps would be:
// Original RGB components: 
// R = 12 (18 in decimal), G = 34 (52 in decimal), B = 56 (86 in decimal)
// Inverted RGB components:
// R = ED (237 in decimal), G = CB (203 in decimal), B = A9 (169 in decimal)

// The resulting inverted hex code would be #EDCBA9 
// Return the inverted color

const hexColor = '#123456';
console.log(invertColor(hexColor));

function invertColor(hexColor) {
  const hexToDecimal = (hexNum) => parseInt(hexNum, 16);

  const decimalToHex = (decNum) => decNum.toString(16);

  let output = '#';
  const chars = hexColor.split('');

  for (let i = 1; i < chars.length - 1; i += 2) {
    const hexNum = chars[i] + chars[i + 1];

    const result = decimalToHex(255 - hexToDecimal(hexNum));

    output += result;
  }

  return output;
}