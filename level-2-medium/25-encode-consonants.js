// Write a function to encode a string by replacing each 
// consonant with the next consonant.

// Vowels and non-alphabetic characters should remain unchanged
// e.g. for the string "Programiz!" --> "Qsohsanib!"
// "Hello, World!" --> "Jemmo, Xosmf!"

const str = "Hello, World!";
console.log(encodeConsonants(str));

function encodeConsonants(str) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    const isUpper = str[i] === str[i].toUpperCase();

    if (consonants.includes(char)) {
      let index = consonants.indexOf(char);
      let next = consonants[index + 1] || consonants[1]; // wrap around
      result += isUpper ? next.toUpperCase() : next;
    } else {
      result += str[i];
    }
  }

  return result;
}

/*
function encodeConsonants(str) {
  const consonants = "bcdfghjklmnpqrstvwxyz";

  return str
    .split("")
    .map(ch => {
      const lower = ch.toLowerCase();
      if (!consonants.includes(lower)) return ch;

      const next = consonants[(consonants.indexOf(lower) + 1) % consonants.length];
      return ch === ch.toUpperCase() ? next.toUpperCase() : next;
    })
    .join("");
}

*/
