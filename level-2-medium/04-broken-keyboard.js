// Write a function to find the maximum number of words from a given text that can be typed with a broken keyboard.
const str = 'Coding in Javascript';
const brokenLetter = 'C';

console.log(maxWordsCanType(str, brokenLetter));

/*
function maxWordsCanType(str, brokenLetter) {
  str = str.toLowerCase();
  const words = str.split(" ");
  const totalWords = words.length;

  return totalWords - (words
    .filter(word => word.includes(brokenLetter.toLowerCase()))
    .length);
}
*/

function maxWordsCanType(str, brokenLetter) {
  brokenLetter = brokenLetter.toLowerCase();
  return str
    .toLowerCase()
    .split(" ")
    .filter(word => !word.includes(brokenLetter))
    .length;
}