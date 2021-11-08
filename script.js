var upLetters = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowLetters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var nums = ['1', '2', '3',"4", "5", "6", "7", "8","9","0"];
var specialChars = ['!', '@', "#", "$", "%", "^", "&", "*", "(", ")", "-","_", "=", "+"];
var Chars = upLetters + lowLetters + nums + specialChars ;
var counter = 1;

// Assignment code here

window.prompt("How many characters would you like your passwords to contain?");
window.confirm("Click OK to confirm including special characters");
window.confirm("Click OK to confirm including numeric characters");
window.confirm("Click OK to confirm including uppercase characters");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

function getRandomLetter() {
  
  var lastIndex = Chars.length-1
  // a random number between 0 - lastIndex
  const randNum = Math.floor(Math.random() * (lastIndex + 1))
  var letter = Chars[randNum]
  return letter
}

console.log(getRandomLetter([Chars]));

///////////////////////





