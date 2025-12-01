// Write a function to count the number of unique digits 
// in a given number.
// For example, for the number 112345, the digits 1, 2, 3, 4, 5
// appear, with at least 1 repeating so the total number of
// unique digits is 5

const num = 112345;
console.log(countUniqueDigits(num));

function countUniqueDigits(num) {
  const arr = [];
  let insertIndex = 0;

  while (num > 0) {
    const digit = num % 10;
    num = num / 10 - (num / 10 % 1);
    let foundIndex = -1
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === digit) foundIndex = i;
    }

    if (foundIndex === -1) {
      arr[insertIndex] = digit;
      insertIndex++;
    }
  }

  return arr.length;
  
}

/*
function countUniqueDigits(num) {
  const str = num.toString();
  let unique = '';

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (!unique.includes(ch)) unique += ch;
  }

  return unique.length;
}

*/

/* 
function countUniqueDigits(num) {
  const str = num.toString();
  const set = new Set(str);
  return set.size;
}
*/