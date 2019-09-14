// Letter choices
var gameLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Set Up Variables for game
var userWins = 0;
var userLosses = 0;
var chancesLeft = 10;
var guessesMade = [];
var computerChoice = [];

// Set up computer input
var randomLetter = function() {
    computerChoice = gameLetters[Math.floor(Math.random() * (gameLetters.length))];
}

// Set up text for guesses made.
var madeChoices = function () {
    document.getElementById("guesses-made").innerHTML = "Guesses Made: " + guessesMade.join(", ");
}

// Set up conditions for chances left.
var guessesLeft = function () {
    document.getElementById("chances-left").innerHTML = "Chances Left: " + chancesLeft;
}

// Reset psychic game
var resetPsychicGame = function () {
    chancesLeft = 10;
    guessesMade.length = 0;
    randomLetter();
    madeChoices();
    guessesLeft();
}

// Set up user input
document.onkeyup = function (event) {
    var userChoice = event.key;
    chancesLeft--;
    guessesMade.push(userChoice);
    madeChoices();
    guessesLeft();

// Set conditions for winning
if (userChoice == computerChoice && chancesLeft > 0) {
    userWins++;
    document.getElementById("wins").innerHTML = "Wins: " + userWins;
    resetPsychicGame();
}

// Set conditions for losing
else if (chancesLeft == 0) {
    userLosses++;
    document.getElementById("losses").innerHTML = "Losses: " + userLosses;
    resetPsychicGame();
}

};