const arr = [2, 4, 6];
console.log(doubleArrayElements(arr));

function doubleArrayElements(arr) {
  return arr.map(val => val * 2);
}