const input = ":) :) :) All smiles here :)";

console.log(replaceSmiley(input));

/*
function replaceSmiley(input) {
  const chars = input.split("")
  
  for (i = 0; i < chars.length; i++) {
    if (chars[i] === ':' && chars[i + 1] == ')')
      chars[i + 1] = '(';
  }

  return chars.join("");
}
*/

function replaceSmiley(str) {
  return str.replaceAll(":)", ":(");
}