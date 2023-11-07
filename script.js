var charLength = 8;
var choiceInput = [];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberSelect = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",]
// I noticed that there is a better way to do the characters but this is how I initially figured it out on my own before googling //
var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


function writePassword() {
    userPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
    var newPass = "";
    for (i = 0; i < charLength; i++) {
        var randomChar = Math.floor(Math.random() * choiceInput.length);
        newPass = newPass + choiceInput[randomChar];

        }
        return newPass;
}

function userPrompt() {
    choiceInput = [];
    charLength = prompt("Number of characters you'd like your password to be? (8-128)");
    if (charLength < 8 || charLength > 128) {
        alert("Numbers of characters must be at least 8-128! Try Again!");
        return false;
        
    }

    // I tried to do if/else but I couldn't get it to work and was able to get it to work using "confirm" //

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

