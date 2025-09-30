// Write a function that swaps the case of the 
// first and last characters. e.g: for str = "Hello World"
// output: "hellO worlD"

const str = "A biG aPple";
console.log(swapCaseFirstLast(str));

function swapCaseFirstLast(str) {
  const words = str.split(' ');

  return words.map((word) => {
    const firstChar = word[0];
    const lastChar = word[word.length - 1];
    let newWord = ""

    if (firstChar.toUpperCase() === firstChar)
      newWord += firstChar.toLowerCase();
    else newWord += firstChar.toUpperCase();

    newWord += word.slice(1, word.length - 1);

    if (lastChar.toUpperCase() === lastChar && word.length > 1)
      newWord += lastChar.toLowerCase();
    else if (word.length > 1) newWord += lastChar.toUpperCase();

    return newWord;
  }).join(' ');
}

/*
function swapCaseIntermediate(str) {
  const toggleCase = ch => 
    ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase();

  return str
    .split(" ")
    .map(word => {
      if (word.length === 0) return word;
      if (word.length === 1) return toggleCase(word); // single char word

      const first = toggleCase(word[0]);
      const middle = word.slice(1, -1);
      const last = toggleCase(word[word.length - 1]);

      return first + middle + last;
    })
    .join(" ");
}
*/

/*
const swapCaseAdvanced = (str) => {
  const toggle = ch => ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase();

  return str
    .split(" ")
    .map(word => {
      if (word.length <= 1) return toggle(word); // covers empty & single-char
      const [first, ...rest] = word;            // destructure first char
      const last = rest.pop();                  // extract last char
      return `${toggle(first)}${rest.join("")}${toggle(last)}`;
    })
    .join(" ");
};
*/