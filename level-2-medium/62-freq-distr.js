// Write a function to create a frequency distribution of 
// the elements in an array.

const arr = ["a", "b", "a", "c", "b", "a"];
console.log(frequencyDistribution(arr));

function frequencyDistribution(arr) {
  const freq = {};

  for (const item of arr) {
    freq[item] = (freq[item] || 0) + 1;
  }

  return freq;
}