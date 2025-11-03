// Write a function to convert a string to snake case

const str = 'Learn With Programiz';
console.log(convertToSnakeCase(str));

function convertToSnakeCase(str) {
  return str.toLowerCase().split(' ')
    .join('_');
}