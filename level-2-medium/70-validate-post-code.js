// Write a function to validate a postal code.
// A valid postal code is a six digit number 
// (first digit must not be zero) that does not 
// contain any alphabets or special characters.

const postalCode = '073436';
console.log(validatePostalCode(postalCode));

function validatePostalCode(postalCode) {
  const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const arr = postalCode.split('');
  const allCharsValid = arr.every(num => validChars.includes(num));

  return ((arr.length === 6 && arr[0] !== '0' && allCharsValid) 
    ? 'Valid'
    : 'Invalid');
}