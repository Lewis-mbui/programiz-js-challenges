// Write a function that returns an array with 
// two elements: vowels and consonants from the string.
// e.g for the input: "Hello, World!"
// output: ["eoo", "HllWrld"]

const str = "Hello, World!";
console.log(separateVowelsConsonants(str));

function separateVowelsConsonants(str) {
  const vowels = 'aeiouAEIOU';
  const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

  const vowStr = str.split('')
    .filter((char) => vowels.includes(char))
    .join('');

  const consStr = str.split('')
    .filter((char) => consonants.includes(char))
    .join('');

  return [vowStr, consStr];
}


/*
function separateVowelsConsonants(str) {
  const vowels = 'aeiouAEIOU';
  let vowelStr = '';
  let consonantStr = '';

  for (let char of str) {
    if (vowels.includes(char)) vowelStr += char;
    else if (/[a-zA-Z]/.test(char)) consonantStr += char;
  }

  return [vowelStr, consonantStr];
}
*/