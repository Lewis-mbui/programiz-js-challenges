// Write a function to calculate the total time spent washing 
// hands over a given period. 
// Given 2 args: times - no. of times a person washes their hands in a day
// days - no. of days over which they have been washing their hands
// Return the total time spent washing hands in the format:
// "X minutes and Y seconds"

const times = 10
const days = 15
console.log(calculateWashingTime(times, days))

function calculateWashingTime(times, days) {
  const secondsPerWash = 21;
  const totalTime = times * days * secondsPerWash;

  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  return `${minutes} minutes and ${seconds} seconds`;
}