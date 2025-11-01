// Write a function to convert a string to camelCase.

const str = "hello world";
console.log(convertToCamelCase(str));

function convertToCamelCase(str) {
    return str.split(' ')
      .map((word, i) => {
        if (i >= 1)
          return word[0].toUpperCase() + word.slice(1);
        return word;
      }).join('');
}