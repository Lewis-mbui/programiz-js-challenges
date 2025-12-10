// Write a function to convert the second letter of each word 
// of a given sentence into uppercase.

const sentence = "this is a nice car";
console.log(transformSecondLetter(sentence));

function transformSecondLetter(sentence) {
  return sentence.split(' ')
    .map((word) => {
      if (word.length < 2) return word;
      return word[0] + word[1].toUpperCase() + word.slice(2);
    }).join(' ');
}