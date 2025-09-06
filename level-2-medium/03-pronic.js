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
