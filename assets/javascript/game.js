// Letter choices
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Set Up Variables for game
var letter;
var wins = 0;
var losses = 0;
var guesses = 10;
var chancesLeft = 10;
var guessesMade = [];

// Set up computer letter
var letter = letters[Math.floor(Math.random()*letters.length)];
console.log(letter)

// Set up user letter
document.onekeypress = function(event) {
    var userInput = event.key;
    userInput.textContent = event.key;

// Set up conditions for winning and losing
    if (userInput == computerInput) {
        userWins++;
        chancesLeft = 10;

    }  else {
        chancesLeft = 0;
        userLosses++;
        chancesLeft = 10;
    } 

// Link Javascript with HTML text.
    document.getElementById("wins").innerHTML = "Wins: ";
    document.getElementById("losses").innerHTML = "Losses: ";
    document.getElementById("chancesLeft").innerHTML = "Chances Left: ";
    document.getElementById("guessesMade").innerHTML = "Guesses Made: ";
}