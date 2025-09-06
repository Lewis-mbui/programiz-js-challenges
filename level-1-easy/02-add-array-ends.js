// Write a function to add the first and last elements of an array.

console.log(addListEnds([10, 4, 5, 12]));

function addListEnds(arr) {
    return arr[0] + arr[arr.length - 1];
}