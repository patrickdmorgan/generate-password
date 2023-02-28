
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!@#$%^&*()_-+=;:<>/?[{]}\|`~"

function generatePassword() {
    var password = "";
    var passwordChar = "";
    // creates user prompt to select password lenth
    var passwordLengthUser = prompt("How many characters would you like your password to be? Password must be between 8-128 characters.");
    passwordLengthUser = parseInt(passwordLengthUser);

    if (passwordLengthUser < 8) {
        alert("Password must have more than 7 characters!");
        return "";
    }    
    if (passwordLengthUser > 128) {
        alert("Password must not have more than 128 characters!");
        return "";
    }

    //  creates confirm boolean for lowercase "yes or no"
    var lowercaseCharactersChoice = confirm("Add some lowercase characters?");

    if (lowercaseCharactersChoice) {
        passwordChar += lowercaseChar;
    }
    
    //  creates confirm boolean for uppercase "yes or no"
    var uppercaseCharacterChoice = confirm("Add some uppercase letters?");

    if (uppercaseCharacterChoice) {
        passwordChar += uppercaseChar;
    }
    // creates confirm boolean for lowercase "yes or no"
    var numericalCharacterChoice = confirm("Add some numbers?");

    if (numericalCharacterChoice) {
        passwordChar += specialChar;
    }

    for (var i = 0; i < passwordLengthUser; i++) {
        password = passwordChar[Math.floor(Math.random() * passwordChar.length)] += password
    }
    
    var pwTextArea = document.getElementById("password");
    pwTextArea.value = password;
}

generateBtn.addEventListener("click", generatePassword);

