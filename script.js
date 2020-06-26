// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*=-_";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var generate = "";
  

var length = prompt("How long would you like your password to be?");


if (length >= 8 && length <= 128) {
  
  var confirmLower = confirm("Do you want lowercase letters in your password?");
  var confirmUpper = confirm("Do you want uppercase letters in your password?");
  var confirmNum = confirm("Do you want numbers in your password?");
  var confirmSym = confirm("Do you want special characters in your password?");
}

if(confirmLower === true)
{generate += lower};
if(confirmUpper === true) 
{generate += upper};
if(confirmNum === true)  
{generate += num};
if(confirmSym === true) 
{generate += sym};


  for (var i = 0; i < length; i++ ) {
    var thePassword = generate.charAt(Math.floor(Math.random() * generate[i]))

}