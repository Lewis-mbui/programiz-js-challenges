// Write a function to find the largest number that can be 
// formed by swapping two digits of a given number.
const num = 1234;
console.log(findLargest(num));

function findLargest(num) {
  const digits = String(num).split(''); // ["3","9","4","5","2"]
  const n = digits.length;

  for (let i = 0; i < n; i++) {
    // find rightmost index of the maximum digit to the right of i
    let maxDigit = digits[i];
    let maxIndex = -1;

    for (let j = i + 1; j < n; j++) {
      // If digit is >= current maxDigit, record it.
      // Using >= so we choose the rightmost occurrence when equal.
      if (digits[j] >= maxDigit) {
        maxDigit = digits[j];
        maxIndex = j;
      }
    }

    // if we found a strictly larger digit to the right, swap and return
    if (maxIndex !== -1 && digits[maxIndex] > digits[i]) {
      [digits[i], digits[maxIndex]] = [digits[maxIndex], digits[i]];
      return Number(digits.join(''));
    }
  }

  // no improving swap found
  return num;
}