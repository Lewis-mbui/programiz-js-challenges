// Write a function to alternately remove characters from a string. 
// For example, from the string "abcdef", 
// the characters 'a', 'c', 'e' would be revoved to result in "bdf"

const str = "Hello World!";
console.log(alternateRemove(str));


function alternateRemove(str) {
  const words = str.split(' ');

  return words.map((word) => {
    let result = '';
    
    for (let i = 1; i < word.length; i += 2)
      result += word[i]

    return result;
  }).join(' '); 
}

/*
const alternateRemove = str =>
  str
    .split(" ")
    .map(word =>
      word
        .split("")          // turn into array of characters
        .filter((_, i) => i % 2 === 1)  // keep only odd indexes
        .join("")           // rebuild word
    )
    .join(" ");

*/