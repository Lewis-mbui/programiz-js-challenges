// Write a function to remove special characters from a string.

const str = "He!llo@ Wo#rld$%^&*()";
console.log(removeSpecialCharacters(str));

function removeSpecialCharacters(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}