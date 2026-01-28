// Write a function to find the occurrence of a character in 
// a string.

const str = "hello world"
const ch = 'l'
console.log(countCharacterOccurrence(str, ch))

function countCharacterOccurrence(str, ch) {
  const freq = {}

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq[ch];
}