// Write a function to hide a credit card number.

const cardNumber = "1234567890123456"

console.log(hideCreditCard(cardNumber));

/*
function hideCreditCard(cardNumber) {
  let newStr = "";
  for (i = 0; i < cardNumber.length; i++) {
    if (i < 12) newStr += '*';
    else newStr += cardNumber[i];
  }

  return newStr;
}
*/

/*
function hideCreditCard(cardNumber) {
  let result = "";
  for (let i = 0; i < cardNumber.length; i++) {
    result += (i < cardNumber.length - 4) ? "*" : cardNumber[i];
  }
  return result;
}
*/

function hideCreditCard(cardNumber) {
  return "*".repeat(cardNumber.length - 4) + cardNumber.slice(-4);
}