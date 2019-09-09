// Letter choices
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Set Up Variables for game
var computerChoice; 
var userWins = 0;
var userLosses = 0;
var chancesLeft = 10;
var guessesMade = [];

// Set up computer input
var randomLetter = function() {
computerChoice = letters[Math.floor(Math.random()*letters.length)];
};

// Set up user letter
document.onekeyup = function(event) {
    var userInput = event.keyCode;
    newFunction(userInput); 
}

// Set up conditions for chances left.
var guessesLeft = function() {
    document.getElementById("chances-left").innerHTML = chancesLeft;
    
};

// Set up text for guesses made.
var madeChoice = function() {
    document.getElementById("guesses-made").innerHTML = guessesMade;
};

// Set up conditions for winning
    if (userInput == computerChoice) {
        userWins++;
        document.getElementsById("wins").innerHTML = userWins;
        resetPsychic();
    } 

// Set up conditions for losing
    else if (chancesLeft == 0) {
        userLosses++;
        document.getElementsById("losses").innerHTML = userLosses;
        resetPsychic();
    }; 

// Reset game
var resetPsychic = function() {
    chancesLeft = 10;
    guessesMade = [];
    randomLetter();
    };

function newFunction(userInput) {
    userInput.push;
}