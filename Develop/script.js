// Password Generator

// Assignment Code and Event Listener to prompt user after clicking on generate button

document.querySelector("#generate").addEventListener("click", writePassword);

// Character Set Arrays 

var charNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpecial = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", ",", "*", "+", "-", ".", "/", ":", ";", "=", "<", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Define user parameter variables

var confirmLength = "";
var confirmSpecial;
var confirmNumeric;
var confirmLower;
var confirmUpper;

// Ask user how many charcters they would like their password to contain

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  while(confirmLength < 8 || confirmLength > 50) {
      alert("Password must be between 8-50 characters. Please re-enter a password length.");
      var conirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

// Ask user what character types they would like to have in their password

    var confirmSpecial = confirm("Click OK if you would like to include special characters");
    var confirmNumeric = confirm("Click OK if you would like to include numeric characters");    
    var confirmLower = confirm("Click OK if you would like to include lowercase characters");
    var confirmUpper = confirm("Click OK if you would like to include uppercase characters");

      while(confirmUpper === false && confirmLower === false && confirmSpecial
         === false && confirmNumeric === false) {
        alert("Error: You must choose at least one parameter");
        var confirmSpecial = confirm("Click OK if you would like to include special characters");
        var confirmNumeric = confirm("Click OK if you would like to include numeric characters");    
        var confirmLower = confirm("Click OK if you would like to include lowercase characters");
        var confirmUpper = confirm("Click OK if you would like to include uppercase characters");   
    } 

// Assign actions to character type variables
      var passwordCharacters = []
      
    if (confirmSpecial) {
      passwordCharacters = passwordCharacters.concat(charSpecial)
    }

    if (confirmNumeric) {
      passwordCharacters = passwordCharacters.concat(charNumeric)
    }
      
    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(charLower)
    }

    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(charUpper)
    }

      console.log(passwordCharacters)

// Random selection of password characters

      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}