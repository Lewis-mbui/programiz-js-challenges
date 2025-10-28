// Write a function to check if the characters in a string are 
// in alphabetical order.

const str = "abcde";
console.log(isStringInOrder(str));

function isStringInOrder(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  return str.split('')
    .every((char, i, arr) => {
      if (i < 1) return true;

      const prev = arr[i - 1];
      return (alphabets.indexOf(char) > alphabets.indexOf(prev));
    }) ? 'Ordered' : 'Unordered';
}

/*
function isStringInOrder(str) {
  str = str.toLowerCase();

  for (let i = 1; i < str.length; i++) {
    const current = str[i];
    const previous = str[i - 1];

    // compare ASCII codes
    if (current < previous) {
      return "Unordered";
    }
  }

  return "Ordered";
}
*/