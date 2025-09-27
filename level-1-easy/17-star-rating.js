// Write a function to generate a star rating.
// Given a number rating, return a string of stars equal to rating

// For example, for rating = 4, a string of stars would be "****"

const rating = 4;
console.log(generateStarRating(rating));

function generateStarRating(rating) {
  return "*".repeat(rating);
}

/*
function generateStarRating(rating) {
  let str = "";

  for (let i = 0; i < rating; i++) str += "*"

  return str;
}
*/