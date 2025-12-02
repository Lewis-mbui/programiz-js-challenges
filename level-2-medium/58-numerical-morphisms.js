// Write a function to perform numerical morphisms.
// To perform numerical morphisms, change each digit in 
// the number into the next consecutive digit. e.g 789 => 890

const n = 1234;
console.log(numericalMorphisms(n));


function numericalMorphisms(n) {
  let result = 0;
  let place = 1;

  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);

    digit = (digit + 1) % 10; // wraps 9 → 0 automatically

    result += digit * place;
    place *= 10;
  }

  return result;
}

/*
function numericalMorphisms(n) {
  const isNegative = n < 0;
  n = Math.abs(n);

  const result = Number(
    [...String(n)].map(d => (Number(d) + 1) % 10).join('')
  );

  return isNegative ? -result : result;
}
*/