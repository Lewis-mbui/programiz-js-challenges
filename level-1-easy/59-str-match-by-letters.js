// Write a function to match strings by letters.
// If all letters of str1 are present in str2, return "Match"
// Otherwise, return "No Match"

const str1 = "hi";
const str2 = "Helicopter"
console.log(stringMatchByLetters(str1, str2));

function stringMatchByLetters(str1, str2) {
  const lower = str2.toLowerCase();
  for (let ch of str1) {
    if (!lower.includes(ch.toLowerCase()))
      return 'No Match';
  }
  return 'Match';
}

/*
function stringMatchByLetters(str1, str2) {
  const freq = {};

  // Count how many times each character appears in str2
  for (let ch of str2.toLowerCase()) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Check if str1’s characters can be "taken" from the frequency map
  for (let ch of str1.toLowerCase()) {
    // If a letter doesn't exist or is used up → no match
    if (!freq[ch]) return "No Match";
    freq[ch]--; // consume one occurrence
  }

  return "Match";
}
*/

/*
function stringMatchByLetters(str1, str2) {
  // A Set allows super fast O(1) membership checks
  const letters = new Set(str2.toLowerCase());

  // Check each character in str1
  for (let ch of str1.toLowerCase()) {
    if (!letters.has(ch)) {
      return "No Match"; // letter missing
    }
  }

  return "Match";
}
*/