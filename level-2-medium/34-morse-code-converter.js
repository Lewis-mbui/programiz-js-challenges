// Write a function to convert a string into Morse code.

// Morse code is used in telecommunication for encoding text 
// characters into sequences of short (dots) and long (dashes).

// In Morse code, 'A' is converted to ".-", 'B' is converted to
// "-...", 'C' is converted to "-.-." and so on;

const str = "HELLO";
console.log(convertToMorse(str));

function convertToMorse(str) {
  const morseCode = {
    'A': ".-", 'B': "-...", 'C': "-.-.", 'D': "-..",
    'E': ".", 'F': "..-.", 'G': "--.", 'H': "....",
    'I': "..", 'J': ".---", 'K': "-.-", 'L': ".-..",
    'M': "--", 'N': "-.", 'O': "---", 'P': ".--.",
    'Q': "--.-", 'R': ".-.", 'S': "...", 'T': "-",
    'U': "..-", 'V': "...-", 'W': ".--", 'X': "-..-",
    'Y': "-.--", 'Z': "--.."
  };

  return str.toUpperCase()
    .split('')
    .map((char) => {
      return morseCode[char];
    }).join(' ');
    
}