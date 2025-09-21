// Write a function to find the first 
// non-repeated character in a string.

const str = 'interview';
console.log(findFirstNonRepeatedCharacter(str));

function findFirstNonRepeatedCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    // if the rest of the string does not contain the current
    // character it is non-repeating therefore return it
    if (!str.slice(i + 1).includes(char)) return char;
  }
}