// Write a function to solve a cryptogram.
// In cryptogram, a character map is used to encrypt texts, 
// which dictates which character in the text must be 
// replaced with which character.

const cipher = "abc"
const map = {'a': 'd', 'b': 'i', 'c': 'o'};
console.log(solveCryptogram(cipher, map));


function solveCryptogram(cipher, map) {
  let result = '';

  for (let char of cipher)
    result += map[char];

  return result;
}

/*
function solveCryptogram(cipher, map) {
  return cipher.split("").reduce((acc, char) => {
    return acc + (map[char] ?? char);
  }, "");
}
*/