// Write a function to split a string at each occurrence of a 
// capital letter.
// Split the given string at each occurrence of a capital 
// letter and return the split strings as a vector.

const str = 'helloWorld';
const str1 = 'fasdBfdfEfdR';
const str2 = 'ROCkstaRR';
const str3 = 'helloworlD';
console.log(splitAtCapitals(str2));

function splitAtCapitals(str) {
  const result = [];
  let start = 0; // marks the beginning of the current word

  for (let i = 1; i < str.length; i++) {

    // If current character is uppercase
    if (str[i] === str[i].toUpperCase()) {

      // Push substring from start up to this capital letter
      result.push(str.slice(start, i));

      // Update start to this capital letter
      start = i;
    }
  }

  // Push the final substring
  result.push(str.slice(start));

  return result;
}

/*
function splitAtCapitals(str) {
  return str.split(/(?=[A-Z])/);
}

*/
