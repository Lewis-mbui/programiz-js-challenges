// Write a function to find the first longest word in a sentence.

const sentence = "The quick brown fox jumps over the lazy old dog";
console.log(findLongestWord(sentence));

function findLongestWord(sentence) {
  const words = sentence.split(' ');

  let maxLength = 0;

  for (let word of words)
    if (word.length > maxLength) maxLength = word.length;

  return words.find(word => word.length === maxLength);
}

/*
function findLongestWord(sentence) {
  const words = sentence.split(' ');

  const lengths = words.map((word) => word.length);

  return words[lengths.indexOf(Math.max(...lengths))];
}
*/