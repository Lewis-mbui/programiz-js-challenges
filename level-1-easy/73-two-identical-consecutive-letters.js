// Write a function to check if a string contains two 
// consecutive identical letters.
// Given a string str, return true if it contains two 
// conscutive identical letters. Otherwise, return false

const str = 'hello';
console.log(hasConsecutiveIdenticalLetters(str));

function hasConsecutiveIdenticalLetters(str) {
  // Normalize case
  const normalized = str.toLowerCase();

  // Spread into array to handle Unicode properly
  const chars = [...normalized];

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      return true;
    }
  }

  return false;
}
