// Write a function to find the number of cards needed to 
// build a house of cards.
// The formula for to calculate the total number of cards 
// eeded to build a house of cards with n level is: 
// (n (n+1) (2n + 1)) / 6

const n = 4;
console.log(houseOfCards(n))

function houseOfCards(n) {
  return (n * (n + 1) * (2*n + 1)) / 6;
}