// Write a function to find the number of tallest candles 
// on a birthday cake given an array where each element represents
// height of a candle.

const arr = [5, 10, 3, 14, 2, 14];
console.log(countTallestCandles(arr));

function countTallestCandles(arr) {
  let count = 0;
  let tallest = 0;

  for (candle of arr) {
    if (candle > tallest) {
      tallest = candle;
      count = 1;
    } else if (candle === tallest)
      count++;
  }

  return count;
}

/*
function countTallestCandles(arr) {
  const tallest = Math.max(...arr);
  const count = arr.filter(h => h === tallest)
    .length;
  return count;
}
*/