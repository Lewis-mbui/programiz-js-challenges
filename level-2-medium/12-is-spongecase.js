// Write a function to check if the given string is in SpongeCase.

// In SpOnGeCaSe, each letter in a word is alternatively 
// uppercased and lowercased, starting with an uppercase letter.
// e.g "PrOgRaMiZ" is in SpOnGeCaSe

const str = "PrOgRaMiZ";
console.log(isSpOnGeCaSe(str));

function isSpOnGeCaSe(str) {
  return [...str].every((char, i) =>
    // Step 1: Check only letters, skip others (digits, spaces, punctuation).
    /[a-zA-Z]/.test(char)
      ? (
          // Step 2: If index is even → char must be UPPERCASE
          i % 2 === 0 
            ? char === char.toUpperCase() 
            // Step 3: Else (index is odd) → char must be lowercase
            : char === char.toLowerCase()
        )
      // Step 4: Non-alphabet chars automatically pass (ignored).
      : true
  );
}

/*
function isSpOnGeCaSe(str) {
  for (let i = 0; i < str.length; i++) {
    if (i === 0 && str[i].toUpperCase() !== str[i]) 
      return false;
    if (i % 2 === 0 && str[i].toUpperCase() !== str[i]) 
      return false;
  }
  return true;
}
*/