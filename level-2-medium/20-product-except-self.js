// Write a function to create an array where each element is 
// the product of all other elements in the input array.

// Given an array of integers, multiply each element with all 
// the other elements except the one at that index.
// Consider an array  [1, 2, 3, 4]:
// For index 0: 2 * 3 * 4 = 24 and so on
// Final output: [24, 12, 8, 6]
// Note: If the input array has 
// only one element, the resulting array will be [1]

const arr = [1, 2, 3, 4];
console.log(productExceptSelf(arr));

function productExceptSelf(arr) {
  const output = [];

  if (arr.length === 1) return [1];

  for (let i = 0; i < arr.length; i++) {
    const arrCopy = arr.slice();
    arrCopy.splice(i, 1);
    const product = arrCopy.reduce((prev, num) => {
      return prev * num;
    });

    output.push(product);
  }

  return output;
}

function productExceptSelf2(arr) {
    return arr.map((item) => {
        const filteredArr = arr.filter(el => el !== item)
        return filteredArr.reduce((acc, curr) => acc * curr, 1)
    })
}