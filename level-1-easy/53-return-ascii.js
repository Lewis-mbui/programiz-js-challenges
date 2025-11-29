// Write a function to return the ASCII value of a character.

const ch = 'A';
console.log(getASCII(ch));


function getASCII(ch) {
  return ch.charCodeAt(0);
}