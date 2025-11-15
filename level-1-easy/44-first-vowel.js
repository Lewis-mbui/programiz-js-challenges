// Write a function to find the index of the first vowel in a string.

const str = 'hello';
console.log(findFirstVowel(str));

function findFirstVowel(str) {
  const vowels = 'AEIOUaeiou';

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) return i;
  }
}

/*
function findFirstVowel(str) {
  const vowels = "aeiouAEIOU";

  return str
    .split('')                       // convert to array
    .findIndex(char => vowels.includes(char));
}
*/

/*
function findFirstVowel(str) {
  const match = str.search(/[aeiou]/i);  // i = case-insensitive
  return match;  // returns -1 if not found
}
*/