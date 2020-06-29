// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*=-_";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function to generate password
function generatePassword() {
  var generate = "";
  var password = "";

  var length = prompt("How long would you like your password to be?");

  length = parseInt(length);

  if (length >= 8 && length <= 128) {
    var confirmLower = confirm("Do you want lowercase letters in your password?");
    var confirmUpper = confirm("Do you want uppercase letters in your password?");
    var confirmNum = confirm("Do you want numbers in your password?");
    var confirmSym = confirm("Do you want special characters in your password?");
  } else {
    var resume = confirm("Must be numerical value between 8 and 128, or exit")
    if (resume) {
      return generatePassword();
    }
    return ''
  }

  if (!confirmLower && !confirmUpper && !confirmNum && !confirmSym) {
    var resume = confirm("Must pick atleast one option, or exit")
    if (resume) {
      return generatePassword();
    }
    return ''
  }

  if (confirmLower === true) {
    generate += lower
    password += returnChar(lower)
  };
  if (confirmUpper === true) {
    generate += upper
    password += returnChar(upper)
  };
  if (confirmNum === true) {
    generate += num
    password += returnChar(num)
  };
  if (confirmSym === true) {
    generate += sym
    password += returnChar(sym)
  };


  for (var i = password.length; i < length; i++) {
    password += returnChar(generate);
  }

  return password;
}

function returnChar(str) {
  return str[Math.floor(Math.random() * str.length)]
}

