// Write a function to find the shortest word in a string.
// If there are multiple words of the shortest length, return the first one.

const str = "Coding is fun! I enjoy it. This is a nice game";
console.log(findShortestWord(str));

function findShortestWord(str) {
  const words = str.split(" ");
  
  // Initialization
  let shortestWord = words[0];

  for (let i = 0; i < words.length; i++)
    if (words[i].length < shortestWord.length) 
      shortestWord = words[i];

  return shortestWord;
}

/*
function findShortestWord(str) {
  return str
    .split(" ")
    .reduce((shortest, current) =>
      current.length < shortest.length ? current : shortest
    );
}
*/