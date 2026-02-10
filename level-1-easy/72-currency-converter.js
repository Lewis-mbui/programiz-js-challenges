// Given sourceCurrency, targetCurrency, and amount by 
// converting it from sourceCurrency to targetCurrency based
// on these conversion rates:
// 1 USD = 0.85 EUR
// 1 EUR = 1.18 USD
// 1 USD = 74.83 INR
// 1 INR = 0.013 USD
// 1 EUR = 88.50 INR
// 1 INR = 0.011 EUR
// For example, given sourceCurrency = "INR", 
// targetCurrency = "USD" and amount = 30
// The conversion rate from "INR" to "USD" is 1 INR = 0.013 USD
// Then 30 INR = 30 * 0.013 = 0.39 USD


const exchangeRates = {
  'usd-eur': 0.85,
  'eur-usd': 1.18,
  'usd-inr': 74.83,
  'inr-usd': 0.013,
  'eur-inr': 88.50,
  'inr-eur': 0.011
}

const sourceCurrency = "INR"
const targetCurrency = "USD"
const amount = 30
console.log(convertCurrency(sourceCurrency, targetCurrency, amount));

function convertCurrency(sourceCurrency, targetCurrency, amount) {
  return Number((amount * exchangeRates[`${sourceCurrency.toLowerCase()}-${targetCurrency.toLowerCase()}`]).toFixed(2));
}

/*
const rates = {
  usd: { eur: 0.85, inr: 74.83 },
  eur: { usd: 1.18, inr: 88.50 },
  inr: { usd: 0.013, eur: 0.011 }
};

function convertCurrency(source, target, amount) {
  const from = source.toLowerCase();
  const to = target.toLowerCase();

  if (!rates[from] || !rates[from][to]) {
    throw new Error('Invalid currency conversion');
  }

  return Number((amount * rates[from][to]).toFixed(2));
}

*/