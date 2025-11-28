// Write a function to convert a binary number to decimal.

const binary = 1011;
console.log(binaryToDecimal(binary));

function binaryToDecimal(binary) {
  const str = String(binary);
  let decimal = 0;

  for (let i = 0; i < str.length; i++) {
    const bit = Number(str[str.length - 1 - i]);
    decimal += bit * 2 ** i;
  }

  return decimal;
}

/*
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}
*/

/* 
function binaryToDecimal(binary) {
  let result = 0;
  for (const bit of String(binary)) {
    result = (result << 1) | Number(bit);
  }
  return result;
}
*/


/*
function binaryToDecimal(binary) {
  let decimalNum = 0;
  let i = 0;

  while (binary > 0) {
    const digit = binary % 10;
    decimalNum += digit * (2 ** i);
    binary = Math.floor(binary / 10);
    i += 1;
  }

  return decimalNum;
}
*/