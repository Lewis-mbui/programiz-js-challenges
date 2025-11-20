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

const data = [237, 130, 129];
// const data = [65, 122];
// const data = [388, 272];
// const data = [723, 12];
// const data = [197, 130, 1];
console.log(validUtf8(data));

function validUtf8(data) {
  if (data.length === 0 || data.length > 4) return false;

   const isValidChar = (str) => {
    const first = str[0]
    const firstThree = str.slice(0, 3);
    const firstFour = str.slice(0, 4);
    const firstFive = str.slice(0, 5);

    return (first === '0' || firstThree === '110'
      || firstFour === '1110' || firstFive === '11110'
    );
  }

  const restValid = (arr) => {
    return arr.every((str) => {
      return isValidChar(str) || str.slice(0, 2) === '10';
    })
  }

  const arr = data.map((num) => {
    return num.toString(2).padStart(8, '0');
  });

  if (arr.length === 1) return isValidChar(arr[0]);

  return isValidChar(arr[0]) && restValid(arr.slice(1));
}

/*
function validUtf8(data) {
  const bytes = data.map(n => n.toString(2).padStart(8, '0'));

  let i = 0;

  while (i < bytes.length) {
    const b = bytes[i];

    let count = 0;

    if (b[0] === '0') count = 1;
    else if (b.startsWith('110')) count = 2;
    else if (b.startsWith('1110')) count = 3;
    else if (b.startsWith('11110')) count = 4;
    else return false;

    // Check continuation bytes
    for (let j = 1; j < count; j++) {
      if (i + j >= bytes.length) return false;
      if (!bytes[i + j].startsWith('10')) return false;
    }

    i += count;
  }

  return true;
}
*/