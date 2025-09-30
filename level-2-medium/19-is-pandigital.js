// Write a function to check if a number is pandigital.

// A pandigital number is an integer that in a given base 
// includes all possible digits within that base at least once.

// In this challenge, we will consider base 10. So, the number 
// should contain all the digits from 0 - 9 at least once.
// HOWEVER, the starting digit cannot be 0

// e.g: 0987654321 is not a pandigital number because 
// the starting digit is 0
// e.g: 6734218095 is a pandigital number because it 
// has all the digits from 0 - 9
// e.g: 12345678901 --> false
// e.g: 1234567890 --> true

const num = 9876540321;
console.log(isPandigital(num));

function isPandigital(num) {
  const str = num.toString();

  // Leading zero not allowed
  if (str[0] === '0' || str.length > 10) return false;

  for (let digit = 0; digit <= 9; digit++) {
    if (!str.includes(digit.toString())) {
      return false; // if any digit missing
    }
  }

  return true;
}