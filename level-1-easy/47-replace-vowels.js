// Write a function to replace all vowels in a string with a 
// specified character.

const str = 'hello';
const ch = '*';
console.log(replaceVowels(str, ch));


function replaceVowels(str, ch) {
  const vowels = 'aeiouAEIOU';
  let result = '';

  for (char of str) {
    if (vowels.includes(char)) result += ch;
    else result += char;
  }

  return result;
}