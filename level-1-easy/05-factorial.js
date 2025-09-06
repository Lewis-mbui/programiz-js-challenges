console.log(calculateFactorial(5));

/*
function calculateFactorial(num) {
  let product = 1;
  
  for (let i = num; i > 0; i--)
    product *= i;

  return product;
}

function calculateFactorial(num) {
  if (num <= 1) return 1;
  return num * calculateFactorial(num - 1);
}

*/

function calculateFactorial(num) {
  return (num === 0) 
    ? 1 : [...Array(num).keys()]
      .map(x => x + 1)
      .reduce((acc, val) => acc * val, 1);
}

