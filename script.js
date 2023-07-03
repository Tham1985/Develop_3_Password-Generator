var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = parseInt(prompt("Enter the password length (8-128 characters):"));
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please try again.");
    return; 
  }
  
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type. Please try again.");
    return;
  }
  
  var character = "";
  if (includeLowercase) {
    character += lowercase;
  }
  if (includeUppercase) {
    character += uppercase;
  }
  if (includeNumeric) {
    character += numeric;
  }
  if (includeSpecial) {
    character += special;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * character.length);
    password += character.charAt(randomIndex);
  }

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
