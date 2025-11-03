// Write a function to check if a word starts with a vowel.

const word = "Icecream";
console.log(checkVowelStart(word));

function checkVowelStart(word) {
  const vowels = 'aeiouAEIOU';

  return vowels.includes(word[0]) ? 'VStart' : 'Start';
}