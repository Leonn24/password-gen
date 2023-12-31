// Set initial character length, input choices, and character sets //

var charLength = 8;
var choiceInput = [];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberSelect = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",]
var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");

// Select the button with the id "generate" from the HTML //

generateBtn.addEventListener("click", writePassword);

// Function to write the generated password to the HTML page //

function writePassword() {
    userPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to generate a password based on user criteria //

function generatePassword() {
    var newPass = "";
    for (i = 0; i < charLength; i++) {
        var randomChar = Math.floor(Math.random() * choiceInput.length);
        newPass = newPass + choiceInput[randomChar];

        }
        return newPass;
}

// Function to prompt the user for password criteria //

function userPrompt() {
    choiceInput = [];
    charLength = prompt("Number of characters you'd like your password to be? (8-128)");
    if (charLength < 8 || charLength > 128) {
        alert("Numbers of characters must be at least 8-128! Try Again!");
        return false;
        
    }

    if (confirm("Would you like lowercase letters in your password?")) {
        choiceInput = choiceInput.concat(lowerAlpha);
    }

    if (confirm("Would you like uppercase letters in your password?")) {
        choiceInput = choiceInput.concat(upperCaseAlpha);
    }
    
    if (confirm("Would you like numbers in your password?")) {
        choiceInput = choiceInput.concat(numberSelect);
    }
    
    if (confirm("Would you like special characters in your password?")) {
        choiceInput = choiceInput.concat(specialChar);
    }
    return true;
    
}

