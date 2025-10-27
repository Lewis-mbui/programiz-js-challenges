// Write a function to remove every vowel from a string.

const str = "Orange juice";
console.log(removeVowels(str));

function removeVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const chars = str.split('');

  return chars.filter((char) => {
    return (!vowels.includes(char.toLowerCase()));
  }).join('');
}