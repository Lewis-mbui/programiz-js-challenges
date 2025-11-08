// Write a function to find mini peaks
// A mini peak is an element that is greater than its neighbors
// For example, given [20, 10, 30, 25], 20 and 30 are greater 
// than their neighbors, i.e, 20 is greater than its neighbor 
// and 30 is greater than its neighbors 10 and 25

// const arr = [20, 10, 30, 25];
const arr = [40, 50, 60, 40, 80];
console.log(findMiniPeaks(arr));

function findMiniPeaks(arr) {
  const miniPeaks = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    const prev = arr[i - 1];

    if (i === 0 && current > next) {
      miniPeaks.push(current);
      continue;
    }

    if (i === arr.length - 1 && current > prev) {
      miniPeaks.push(current);
      continue;
    }

    if (current > prev && current > next) {
      miniPeaks.push(current);
    }
  }

  return miniPeaks;
}

/*
function findMiniPeaks(arr) {
  const peaks = [];

  for (let i = 0; i < arr.length; i++) {
    const prev = arr[i - 1] ?? -Infinity; // use -Infinity for undefined
    const next = arr[i + 1] ?? -Infinity;
    const current = arr[i];

    if (current > prev && current > next) {
      peaks.push(current);
    }
  }

  return peaks;
}
*/

/*
function findMiniPeaks(arr) {
  return arr.filter((current, i) => {
    const prev = arr[i - 1] ?? -Infinity;
    const next = arr[i + 1] ?? -Infinity;
    return current > prev && current > next;
  });
}
*/