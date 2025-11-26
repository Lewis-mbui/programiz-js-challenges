// Write a function to find whether a string is palindrome.
// A palindrome is a string that reads the same forwards 
// and backwards. For example: radar

const str = 'radar';
console.log(isPalindrome(str));


function isPalindrome(str) {
  let reversed = '';
  const n = str.length;

  for (let i = n - 1; i >= 0; i--) reversed += str[i];

  return str === reversed;
}

/*
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === [...cleaned].reverse().join('');
}
*/