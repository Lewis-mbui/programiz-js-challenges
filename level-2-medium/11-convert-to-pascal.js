// Write a function to convert a string to PascalCase.
// In PascalCase: 
// - Every word is capitalized.
// -There are no spaces
// e.g "learn with Programiz" --> "LearnWithProgramiz"

const str = 'hello world'
console.log(convertToPascalCase(str));

function convertToPascalCase(str) {
  return str.toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('');
}

/*
function convertToPascalCase(str) {
  return str
    .toLowerCase()
    .split(/[^a-z0-9]+/i)   // split by non-alphanumeric characters
    .filter(Boolean)        // remove empty entries
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('');
}
*/