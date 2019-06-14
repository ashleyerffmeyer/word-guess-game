// Creating variables to hold the number of wins and number of remaining guesses. Wins start at 0. Remaining guesses start at 12.
var wins = 0;
var guesses = 12;

// Create variables that hold references to the places in the HTML where we want to display things.
var scoreText = document.getElementById("score");
var currentWordBlanksText = document.getElementById("current-word-blanks");
var guessesText = document.getElementById("guesses");
var guessedLettersText = document.getElementById("guesses-letters-list");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

}


// Display the user wins, current word letters, number of guesses remaining, and letters already guessed.
scoreText.textContent = wins;
currentWordBlanksText.textContent = currentWordBlanks;
guessesText.textContent = guesses;
guessedLettersText.textContent = guessedLetters;
