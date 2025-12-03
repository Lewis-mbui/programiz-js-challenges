// Write a function to find the first non-repeating 
// character in a string and return its index.
// If there is no such character, return -1

const str = "aabbcc";
console.log(firstUniqueChar(str));

function firstUniqueChar(str) {
  const s = str.toLowerCase();

  return [...s].findIndex(ch => s.indexOf(ch) === s.lastIndexOf(ch));
}

/* 
function firstUniqueChar(str) {
  const s = str.toLowerCase();
  const freq = {};

  // Count frequency of each letter
  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Find first char whose count is 1
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }

  return -1;
}
*/

/*
function firstUniqueChar(str) {
  const s = str.toLowerCase();

  // Loop through each character
  for (let i = 0; i < s.length; i++) {
    let repeated = false;

    // Compare with every other character
    for (let j = 0; j < s.length; j++) {
      if (i === j) continue;   // skip comparing to itself

      if (s[i] === s[j]) {
        repeated = true;       // found a duplicate
        break;
      }
    }

    if (!repeated) {
      return i;               // first non-repeating char
    }
  }

  return -1;                  // no unique character found
}
*/