// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password
function generatePassword() {
  var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length!");
    return;
  }

  // Prompt for character types
  var lowercase = confirm("Do you want to include lowercase characters?");
  var uppercase = confirm("Do you want to include uppercase characters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var special = confirm("Do you want to include special characters?");

  // Validate at least one character type is selected
  if (!(lowercase || uppercase || numeric || special)) {
    alert("Please select at least one character type!");
    return;
  }

  // Define character pool based on selected character types
  var charPool = "";
  if (lowercase) charPool += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numeric) charPool += "0123456789";
  if (special) charPool += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Generate password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += charPool.charAt(Math.floor(Math.random() * charPool.length));
  }

  return password;
}
