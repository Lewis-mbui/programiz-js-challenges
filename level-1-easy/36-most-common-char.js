// Return the most common character in the string 

const str = 'hello world';
console.log(findMostCommonChar(str));

function findMostCommonChar(str) {
  str = str.toLowerCase();
  let maxCount = 0;

  const freq = str.split('')
    .filter((char) => {
      return char !== ' ';
    }).reduce((prev, char) => {
      prev[char] = (prev[char] || 0) + 1;
      return prev;
    }, {});

  return Object.entries(freq).reduce((prev, current) => {
    [char, count] = current;
    if (count > maxCount) {
      maxCount = count;
      return char;
    }
    return prev;
  }, '');
}

// BEGINNER IMPLEMENTATION
/*
function findMostCommonChar(str) {
  // Convert to lowercase for case-insensitive comparison
  str = str.toLowerCase();

  // Object to store frequency of each character
  const freq = {};

  // Step 1: Build frequency map
  for (let char of str) {
    if (char === ' ') continue; // skip spaces

    if (freq[char]) freq[char]++;
    else freq[char] = 1;
  }

  // Step 2: Find character with maximum frequency
  let maxCount = 0;
  let mostCommon = '';

  for (let char in freq) {
    if (freq[char] > maxCount) {
      maxCount = freq[char];
      mostCommon = char;
    }
  }

  return mostCommon;
}

// INTERMEDIATE IMPLEMENTATION
/*
function findMostCommonChar(str) {
  str = str.toLowerCase();

  // Step 1: Create a frequency map
  const freq = str
    .split('')
    .filter(char => char !== ' ')
    .reduce((map, char) => {
      map[char] = (map[char] || 0) + 1;
      return map;
    }, {});

  // Step 2: Get the character with max frequency
  const [char] = Object.entries(freq).reduce((maxPair, currentPair) =>
    currentPair[1] > maxPair[1] ? currentPair : maxPair
  );

  return char;
}
*/