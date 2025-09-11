// Write a function to repeat vowels in a string.
const str = 'Hello Aaron';
console.log(repeatVowels(str));

function repeatVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const chars = str.split('');

  return chars.map(char => (vowels
    .includes(char.toLowerCase()) 
    ? char + char 
    : char)).join('');
}