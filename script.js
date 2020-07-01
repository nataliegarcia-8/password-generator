// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigning  Global Variables 
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

//assigning numerical value to length variable 
  length = parseInt(length);

// Setting length range - confirm pop-ups for each character 
  if (length >= 8 && length <= 128) {
    var confirmLower = confirm("Do you want lowercase letters in your password?");
    var confirmUpper = confirm("Do you want uppercase letters in your password?");
    var confirmNum = confirm("Do you want numbers in your password?");
    var confirmSym = confirm("Do you want special characters in your password?");
  } 
  // setting pop up for incorrect length 
  else {
    var resume = confirm("You must choose a numerical value between 8 and 128! \n Cancel to exit.")
    if (resume) {
      return generatePassword();
    }
    return ''
  }

  // setting pop up for no characters selected
  if (!confirmLower && !confirmUpper && !confirmNum && !confirmSym) {
    var resume = confirm("Must pick at least one character option! \n Cancel to exit.")
    if (resume) {
      return generatePassword();
    }
    return ''
  }

// setting characters chosen to their matching variables
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

//for loop to generate password
  for (var i = password.length; i < length; i++) {
    password += returnChar(generate);
    password = shuffle(password);
  }
  return password;
}

// randomly assigning characters 
function returnChar(str) {
  return str[Math.floor(Math.random() * str.length)]
}

// shuffling string to prevent patterns

function shuffle(password){
  var arr = password.split("");
  arr.sort(function() {
    return 0.5 - Math.random();
  });
  password = arr.join("");
  return password;
}


