// Write a function to check the strength of a password
const password = "Pass";
console.log(checkPasswordStrength(password));


function checkPasswordStrength(password) {
  const specialChars = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
    "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", 
    ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", 
    "`", "~"
  ];

  let hasNumber = false, hasSpecialChar = false, 
    hasLowerCase = false, hasUpperCase = false;

  const chars = password.split('');

  for (let i = 0; i < chars.length; i++) {
    if (!Number.isNaN(Number(chars[i])))
      hasNumber = true;

    if (specialChars.includes(chars[i]))
      hasSpecialChar = true;

    if (chars[i].toLowerCase() === chars[i] && 
      Number.isNaN(Number(chars[i])) && 
      !specialChars.includes(chars[i]))
        hasLowerCase = true;
  
    if (chars[i].toUpperCase() === chars[i] && 
      Number.isNaN(Number(chars[i])) && 
      !specialChars.includes(chars[i])) 
        hasUpperCase = true;
  }
  
  if (chars.length >= 8 && hasSpecialChar 
    && hasNumber && hasLowerCase && hasUpperCase) return "Strong";
  if (chars.length >= 6 && hasNumber && (hasUpperCase || hasLowerCase))
    return "Medium";
  
  return "Weak";
}

/* 
function checkPasswordStrength(password) {
  let hasNumber = false;
  let hasSpecialChar = false;
  let hasLowerCase = false;
  let hasUpperCase = false;

  for (let char of password) {
    if (/[0-9]/.test(char)) hasNumber = true;
    else if (/[a-z]/.test(char)) hasLowerCase = true;
    else if (/[A-Z]/.test(char)) hasUpperCase = true;
    else hasSpecialChar = true;  // everything else
  }

  if (password.length >= 8 && hasNumber && hasSpecialChar && hasLowerCase && hasUpperCase) {
    return "Strong";
  }
  if (password.length >= 6 && hasNumber && (hasLowerCase || hasUpperCase)) {
    return "Medium";
  }
  return "Weak";
}
*/