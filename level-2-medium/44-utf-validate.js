// Write a function to validate a UTF-8 sequence.
// A valid UTF-8 sequence contains different data of 1-4 bytes
// subjected to the following rules: 
// 1. 1-byte character: Starts with 0
// 2. 2-byte character: Starts with 110 followed 
//    by another byte starting with 10 e.g. "110xxxxx 10xxxxxx"
// 3. 3-byte character: Starts with 1110 followed by 2 bytes 
//    starting with 10 e.g. "1110xxxx 10xxxxxx 10xxxxxx"
// 4. 4-byte character: Starts with 11110 followed by 3
//    bytes starting with 10 e.g "11110xxx 10xxxxxx 10xxxxxx 10xxxxxx"

// const data = [237, 130, 129]
// const data = [388, 272];
const data = [197, 130, 1];
console.log(validUtf8(data));

function validUtf8(data) {
  if (data.length === 0 || data.length > 4) return false;

  const validFirstTwoBits = (arr) => {
    return arr.every((str) => str.slice(0, 2) === '10');
  }

  const arr = data.map((num) => {
    return num.toString(2).padStart(8, 0);
  })

  if (arr.length === 1)
    return arr[0][0] === '0';

  if (arr.length === 2) {
    const first = arr[0].slice(0, 3);
    const restValid = validFirstTwoBits([...arr.slice(1)])

    return (first === '110' && restValid);
  }

  if (arr.length === 3) {
    const first = arr[0].slice(0, 4);
    const restValid = validFirstTwoBits([...arr.slice(1)]);

    return (first === '1110' && restValid);
  }

  if (arr.length === 4) {
    const first = arr.slice(0, 5);
    const restValid = validFirstTwoBits([...arr.slice(1)]);

    return (first === '11110' && restValid);
  }
}