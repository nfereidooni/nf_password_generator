// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log('Function is running')
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Ask how many charcters user would like password to contain

// Confirm if user would like special characters

// Confirm if user wants numeric characters

// Confirm if user wants lowercase characters

// Confirm if user wants uppercase characters

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
