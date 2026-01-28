/*
Return a string containing numbers from 1 to n, separated by 
spaces, with the multiples of 3 replaced by "Excuse"

For example, given n = 7, the output is "1 2 Excuse 4 5 Excuse 7"
*/

const n = 10;
console.log(threesExcuse(n));

function threesExcuse(n) {
  let result = '';

  for (let i = 1; i <= n; i++) {
    result += i % 3 === 0 ? 'Excuse ' : `${i} `
  }

  return result;
}

/*
const threesExcuse = n =>
  [...Array(n)]
    .map((_, i) => (i + 1) % 3 === 0 ? "Excuse" : i + 1)
    .join(" ");

*/