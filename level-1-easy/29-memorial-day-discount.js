// Write a function to calculate the total cost after 
// applying the Memorial Day discount.

// Imagine today is Memorial Day, and each item costing over 100
// received a 10% discount
// Given a list of item prices, return the total cost after applying
// the Memorial Day discount
// e.g: prices = [120, 50, 600] result should be 698

const prices = [120, 50, 600];
console.log(calculateTotalCost(prices));

function calculateTotalCost(prices) {
  return prices.map((price) => {
    if (price > 100) return Math.round(0.9 * price);
    return price;
  }).reduce((a, b) => a + b);
}