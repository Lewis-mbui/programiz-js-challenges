// Write a function to find the longest common ending in two strings.
// For example, the given two strings are "goodcharacter" and 
// "badcharacter". The longest common ending between these two is
// character
// If there is no common string return ""

const str1 = 'programming';
const str2 = 'gaming';

console.log(findLongestCommonEnding(str1, str2));

function findLongestCommonEnding(str1, str2) {
  let result = '';
  let i = str1.length - 1;
  let j = str2.length - 1;

  while (i >= 0 && j >= 0 && str1[i] === str2[j]) {
    result = str1[i] + result;
    i--;
    j--;
  }

  return result;
}
