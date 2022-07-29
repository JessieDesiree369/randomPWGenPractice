// Assignment Code
// Character strings referenced in password generation
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];  
var numbers = ["0","1","2","3","4","5","6","7","8","9",];
var specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //prompt the user for password criteria
  var length = prompt("How long will the password be? (Enter a number between 8 and 128)")
  console.log(length)
  
    //1st, let user enter pw length (8>128)
  if(length < 8 || length > 128) {
    alert("The length must be between 8 and 128.")
    return
  } else if (isNaN(length)) {
      alert("Please DO NOT use letters.")
      return 
  } else {
      alert("Your length choice is valid.")
  }

    //2nd, y/n include lower case?
  var lowCaseInclude = confirm("Include lower case?")
  if (lowCaseInclude) {
    alert("You have chosen to INCLUDE lower case letters.")
  } else {
    alert("You have chosen NOT TO to include lower case letters.")
  }

    //   y/n include numbers?
  var numInclude = confirm("Inclue numbers?")
  if (numInclude) {
    alert("You have chosen to INCLUDE numbers.")
  } else {
    alert("You have chosen NOT TO to include numbers.")
  }

    //   y/n include special characters?
  var specInclude = confirm("Inclue special characters?")
  if (specInclude) {
    alert("You have chosen to INCLUDE scecial characters.")
  } else {
    alert("You have chosen NOT TO to include special characters.")
  }
  //3rd, validated input in else portions of the if statements

  //4th, generate password
  var includeThese = []

  if (lowCaseInclude) {
    includeThese.push(lowerCase)
  }

  if (numInclude) {
    includeThese.push(numbers)
  }

  if (specInclude) {
    includeThese.push(specialChar)
  }
console.log(includeThese)
  //5th, display generated password

  return "password will display here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
