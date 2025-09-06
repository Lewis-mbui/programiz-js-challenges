// Write a function to check if a number is pronic
/*
A pronic number is a product of two consecutive integers. For example, 42 
is a pronic number because it is obtained by multiplying two consecutive integers: 6 and 7
*/
console.log(checkPronic(13));

/*
function checkPronic(num) {
  for (let i = 1; i <= num; i++) {
    if (i * (i + 1) === num) {
      return "isPronic";
    }
  }

  return "Not Pronic";
}
*/


function checkPronic(num) {
  return [...Array(num + 1).keys()]
    .reduce((found, number) => {
      return found || (number * (number + 1) === num);
    }, false) ? "Pronic" : "Not Pronic";
}
