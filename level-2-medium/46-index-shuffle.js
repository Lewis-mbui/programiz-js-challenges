// Write a function to shuffle the indices of a string.
// Shuffle the indices of the string  such that all 
// even-indexed characters come first, followed by all odd-indexed characters.
// For example, the given string is "helloworld"
// So our resulting string after applying shuffle would be 
// "hloolelwrd"

const str = "helloworld";
console.log(indexShuffle(str));

function indexShuffle(str) {
  let evens = '';
  let odds = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) evens += str[i];
    else odds += str[i];
  }

  return evens + odds;
}

/*
const indexShuffle = str =>
  [...str].filter((_, i) => i % 2 === 0).join("") +
  [...str].filter((_, i) => i % 2 === 1).join("");

*/