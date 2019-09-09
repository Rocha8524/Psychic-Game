// Letter choices
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Set Up Variables for game
var computerLetter = letters[Math.floor(Math.random()*letters.length)];
var userInput = null;
var wins = 0;
var losses = 0;
var guesses = 10;
var chancesLeft = 10;
var guessesMade = [];

// Set up user letter
document.onekeyup = function(event) {
    const newLocal = String.fromCharCode;
    var userInput = newLocal(event.key);

// Set up conditions for winning and losing
    if (userInput == computerLetter) {
        wins++;
        Reset();
    }  
    
    if (chancesLeft == 0) {
        losses++;
        Reset();
    } 

//Reset variables
function Reset() {
    chancesLeft = 10;
    guessesMade = [];
    computerLetter = letters[Math.floor(Math.random()*letters.length)];
}

// Link Javascript with HTML text.
    document.getElementsById("wins").innerHTML = "Wins: ";
    document.getElementsById("losses").innerHTML = "Losses: ";
    document.getElementsById("chancesLeft").innerHTML = "Chances Left: ";
    document.getElementsById("guessesMade").innerHTML = "Guesses Made: ";
}