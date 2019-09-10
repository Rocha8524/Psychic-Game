// Letter choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Set Up Variables for game
var computerChoice;
var userWins = 0;
var userLosses = 0;
var chancesLeft = 10;
var guessesStart = 10;
var guessesMade = [];

// Set up computer input
var randomLetter = function () {
    computerChoice = letters[Math.floor(Math.random() * (letters.length))];
};

// Set up text for guesses made.
var madeChoices = function () {
    document.getElementById("guesses-made").innerHTML = "Guesses Made: " + guessesMade;
};

// Set up conditions for chances left.
var remainders = function () {
    document.getElementById("chances-left").innerHTML = "Chances Left: " + chancesLeft;
};

// Set up user input
document.onkeyup = function (event) {
    var userChoice = event.key;
    chancesLeft;
    guessesMade.push(userChoice);
    madeChoices();
    guessesLeft();

    // Set conditions for winning
    if (userChoice == computerChoice) {
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

    // Reset psychic game
    var resetPsychicGame = function () {
        guesses = [];
        chancesLeft = 10;
        newChoices();
        madeChoices();
        guessesLeft();
    }

};