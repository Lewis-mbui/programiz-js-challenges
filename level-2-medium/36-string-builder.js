// Write a function to build a string from given 
// characters and their frequencies.

const chars = ['a', 'b', 'c']
const frequencies = [2, 3, 1]

console.log(buildString(chars, frequencies));

function buildString(chars, frequencies) {
  let result = '';

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const repeatCount = frequencies[i];

    for (let j = 0; j < repeatCount; j++)
      result += char;
  }

  return result;
}