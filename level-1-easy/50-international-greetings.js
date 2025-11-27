// Write a function to greet a user in different languages.

// Based on the input, return the greeting in that language. 
// If the language is not listed, return "Hello"

// For this problem, consider these greetings: "Hello" for 
// "English""Hola" for "Spanish", "Bonjour" for "French", and 
// "Ciao" for "Italian"

const language = "Zulu";
console.log(greetUser(language));


function greetUser(language) {
  const greetings = {
    english: 'Hello',
    french: 'Bonjour',
    spanish: 'Hola',
    italian: 'Ciao'
  }

  language = language.toLowerCase();

  return greetings[language]
    ? greetings[language]
    : 'Hello';
}

/*
function greetUser(language) {
  if (typeof language !== "string") return "Hello";

  const greetings = {
    english: "Hello",
    spanish: "Hola",
    french: "Bonjour",
    italian: "Ciao",
  };

  const key = language.trim().toLowerCase();
  return greetings[key] || "Hello";
}
*/