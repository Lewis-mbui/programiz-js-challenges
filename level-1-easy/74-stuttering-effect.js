// Write a function to create a stuttering effect on a given word.
// stuttering effect is repeating the first two letters of the
// word twice with and ellipsis and space before the word
// e.g given "incredible" --> "in... in... incredible"
// given 'coca cola' --> "co... co... coca cola"

const word = 'incredible';
console.log(stutter(word));

function stutter(word) {
  return (word.slice(0,2) + '... ').repeat(2) + `${word}`;
}

/*
function stutter(word) {
  // Trim whitespace
  const cleanWord = word.trim();

  // Handle very short words
  if (cleanWord.length < 2) {
    return cleanWord;
  }

  const prefix = cleanWord.slice(0, 2) + '... ';

  return prefix.repeat(2) + cleanWord;
}

*/