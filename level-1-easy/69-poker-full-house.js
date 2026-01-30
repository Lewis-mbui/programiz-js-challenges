// Write a function to check if the given poker hand is a 
// full house.
// A poker hand is a full house if it contains three cards 
// of one rank and two cards of another rank. 

const hand = [2, 2, 2, 3, 3];
console.log(checkFullHouse(hand));

function checkFullHouse(hand) {
  if (hand.length !== 5) return 'Not Full House';

  const freq = {};

  for (const card of hand) {
    freq[card] = (freq[card] || 0) + 1;
  }

  const counts = Object.values(freq);

  return counts.length === 2 && counts.sort().join() === '2,3'
    ? 'Full House'
    : 'Not Full House';
}

/*
function checkFullHouse(hand) {
  const freq = {};

  for (let i = 0; i < hand.length; i++) {
    const card = hand[i];
    freq[card] = (freq[card] || 0) + 1;
  }

  let hasThree = false;
  let hasTwo = false;

  for (const key in freq) {
    if (freq[key] === 3) hasThree = true;
    if (freq[key] === 2) hasTwo = true;
  }

  if (hasThree && hasTwo) {
    return 'Full House';
  }

  return 'Not Full House';
}*/