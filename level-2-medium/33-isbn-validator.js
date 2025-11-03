// Write a function to validate an ISBN number
// A valid ISBN number is ten-digits long and the sum of 
// each digit multiplied by its position is divisible by 11 
// e.g given "0306406152": 
// Here, the sum of each digit multiplied by its position is 
// 0×1 + 3×2 + 0×3 + 6×4 + 4×5 + 0×6 + 6×7 + 1×8 + 5×9 + 2×10 = 165
// and since 165 % 11 = 0 --> "0306406152" is a valid ISBN number

const isbn = "0471958697";
console.log(validateISBN(isbn));

function validateISBN(isbn) {
  const sum = isbn.split('')
    .reduce((prev, char, i) => {
      return prev + (+char * (i + 1))
    }, 0);

  return sum % 11 === 0;
}