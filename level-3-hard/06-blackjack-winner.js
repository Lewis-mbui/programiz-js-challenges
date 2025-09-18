// Write a function to find the winner of a blackjack game.
// - The goal is to get as close to 21 without going over
// - The player closer to 21 wins the game
// - If a player goes over 21, they lose immediately
// - If both players have the same score it's a draw

const player1 = [4, 19];
const player2 = [4, 19];
console.log(blackjackWinner(player1, player2));

function blackjackWinner(player1, player2) {
  const winningScore = 21;

  const score1 = player1.reduce((a, b) => a + b);
  const score2 = player2.reduce((a, b) => a + b);

  // Both are OVER the "winningScore"
  if (score1 > winningScore && score2 > winningScore) return "Both pick again";

  // If we reach here, one or both are ON/BELOW "winningScore"
  if (score2 > winningScore) return "Player1";
  if (score1 > winningScore) return "Player2";

  // If we reach here, BOTH are ON/BELOW "winning score"
  if (score1 > score2) return "Player1";
  if(score2 > score1) return "Player2";
  return "Draw";
}

function blackjackWinner(player1, player2) {
  // Helper to validate and compute sum of two-card hand
  function handSum(hand, label) {
    if (!Array.isArray(hand) || hand.length !== 2) {
      throw new Error(`${label} must be an array of 2 numbers`);
    }
    const [a, b] = hand;
    if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
      throw new Error(`${label} must contain valid numbers`);
    }
    return a + b;
  }

  // Compute sums
  const sum1 = handSum(player1, 'player1');
  const sum2 = handSum(player2, 'player2');

  // Check busts (over 21)
  const bust1 = sum1 > 21;
  const bust2 = sum2 > 21;

  if (bust1 && bust2) return 'Draw (both bust)'; // both lose -> consider it a draw
  if (bust1) return 'Player 2 wins';             // player1 busted, player2 wins
  if (bust2) return 'Player 1 wins';             // player2 busted, player1 wins

  // Neither busted: compare scores
  if (sum1 === sum2) return 'Draw (same score)';
  return sum1 > sum2 ? 'Player 1 wins' : 'Player 2 wins';
}

// Examples
console.log(blackjackWinner([10, 9], [10, 8])); // Player 1 wins  (19 vs 18)
console.log(blackjackWinner([10, 12], [9, 9])); // Player 2 wins  (22 -> bust vs 18)
console.log(blackjackWinner([10, 7], [8, 9]));  // Draw (same score) (17 vs 17)
console.log(blackjackWinner([12, 10], [11, 11])); // Draw (both bust) (22 vs 22)
