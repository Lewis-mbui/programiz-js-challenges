// Write a function to check if the given two-digit number 
// has one even and one odd digit.

// If the given two-digit number has one even and one odd 
// digit, return true, Otherwise return false

const num = 21;
console.log(checkEvenOdd(num));

function checkEvenOdd(num) {
  let oneEven = false, oneOdd = false;

  while (num > 0) {
    const d = num % 10;

    if (d % 2 === 0) oneEven = true;
    else oneOdd = true;

    if (oneEven && oneOdd) return true;

    num = Math.floor(num / 10);
  }

  return false;
}

/*
const checkEvenOdd = n =>
  [...n.toString()].some(d => d % 2 === 0) &&
  [...n.toString()].some(d => d % 2 !== 0);
*/