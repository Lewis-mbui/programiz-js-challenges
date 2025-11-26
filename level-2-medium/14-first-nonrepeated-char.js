// Write a function to find the first 
// non-repeated character in a string.

const str = 'interview';
console.log(findFirstNonRepeatedCharacter(str));

function findFirstNonRepeatedCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Should be the first occurrence at this index
    // Should not be repeated later
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return null; // if all characters are repeated
}

/*
function firstNonRepeatedCharMap(str) {
  const freq = {};

  // Count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find first character with frequency 1
  for (let char of str) {
    if (freq[char] === 1) return char;
  }

  return null; // if all characters are repeated
}

// Example usage
console.log(firstNonRepeatedCharMap("swiss")); // w
console.log(firstNonRepeatedCharMap("aabbcc")); // null
*/

/*
function firstNonRepeatedCharOneLiner(str) {
  return str
    .split('')
    .find(char => str.indexOf(char) === str.lastIndexOf(char)) || null;
}
*/