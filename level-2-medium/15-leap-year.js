// Write a function to check if a year is a leap year.

// A leap year is a year that satisfies the following conditions:
// - If a year is divisible by 4, it could be a leap year.
// - However, if that year is also divisible by 100, 
//   it must also be divisible by 400

const year = 2000;

console.log(checkLeapYear(year));

function checkLeapYear(year) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  return isLeap ? "Leap" : "Noleap";
}

/*
function checkLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0))
    return "Leap";

  if ((year % 100 === 0) && (year % 400 === 0))
    return "Leap";

  return "Noleap";
}
*/