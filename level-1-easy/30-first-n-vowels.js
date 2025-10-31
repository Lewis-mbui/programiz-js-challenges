// Write a function to return the first N vowels from a string.

const str = "Ice and water";
const n = 3;

console.log(getFirstNVowels(str, n));

function getFirstNVowels(str, n) {
  const vowels = 'aeiouAEIOU';
  let result = '';
  let count = 0;

  for (char of str)
    if (count < n && vowels.includes(char)) {
      result += char;
      count++;
    }
  return result;
}

/*
function getFirstNVowels(str, n) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.slice(0, n).join('') : '';
}
*/