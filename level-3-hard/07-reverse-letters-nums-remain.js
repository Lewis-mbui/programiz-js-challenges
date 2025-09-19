// Write a function to reverse only the letters in a string

// Given a string , return a new string where all the letters are reversed 
// but the numbers remain at their original positions.
// For example, given "w7xy3z", the letters are "wxyz" and numbers are "73"
// Reversing the letters gives us "zyxw", where we can put "73"
// at its original position to result in "z7yx3w"

const str = "Pr0gram1z";
console.log(reverseLettersKeepNumbers(str));

function reverseLettersKeepNumbers(str) {
  // Step 1: Collect only the letters from the input string
  // Example: "w7xy3z" → ["w", "x", "y", "z"]
  const stack = [...str].filter(char => /[a-zA-Z]/.test(char));

  // Step 2: Walk through the original string again
  // If it's a letter, pop from stack (so we get reversed letters)
  // If it's not a letter (like numbers), just keep it as is
  const result = [...str].map(char => {
    if (/[a-zA-Z]/.test(char)) {
      // Replace the letter with the last item from stack
      // Example: stack = ["w","x","y","z"], first pop → "z"
      return stack.pop();
    } else {
      // If it's not a letter (numbers, symbols), don’t change it
      return char;
    }
  });

  // Step 3: Join everything back into a single string
  return result.join('');
}

/*
function reverseLettersKeepNumbers(str) {
  const output = [];

  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    if (/^[a-zA-Z]+$/.test(char)) output.push(char);
  }

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (char === '0' || parseInt(char)) 
      output.splice(i, 0, char);
  }

  return output.join('');
}
*/