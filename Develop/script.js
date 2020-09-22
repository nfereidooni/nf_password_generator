// Password Generator

// Assignment Code and Event Listener to prompt user after clicking on generate button

document.querySelector("#generate").addEventListener("click", writePassword);

// Character Arrays

var charSetSpecial = ["!", "\"", "#", "$" "%", "&", "\'", "(", ")", ",", "*", "+", "-", ".", "/", ":", ";", "=" "<", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
var charSetNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charSetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Define user parameter variables

var confirmLength = "";
var confirmSpecial;
var confirmNumeric;
var confirmUpper;
var confirmLower;

// Ask user how many charcters they would like their password to contain

function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to contain?"));
      while(confirmLength < 8 || confirmLength > 50) {
        alert("Password must be between 8-50 characters. Please re-enter a password length.");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
        } 

// Ask user about character types they would like to have in their password

  var confirmSpecial = confirm("Click OK if you would like to include special characters.");
  var confirmNumeric = confirm("Click OK if you would like to include numeric characters.");    
  var confirmLower = confirm("Click OK if you would like to include lowercase characters.");
  var confirmUpper = confirm("Click OK if you would like to include uppercase characters.");
    while(confirmUpper === false && confirmLower === false && confirmSpecial === false && confirmNumeric === false) {
      alert("Error: You must choose at least one parameter.");
      var confirmSpecial = confirm("Click OK if you would like to include special characters");
      var confirmNumeric = confirm("Click OK if you would like to include numeric characters");    
      var confirmLower = confirm("Click OK if you would like to include lowercase characters");
      var confirmUpper = confirm("Click OK if you would like to include uppercase characters");   
} 


// Write password to the #password input
function writePassword() {
  console.log('Function is running')
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
