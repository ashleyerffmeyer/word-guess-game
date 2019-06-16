// Creating variables to hold the number of wins and number of remaining guesses. Wins start at 0. Remaining guesses start at 12.
var wins = 0;
var guesses = 12;

// Create variables that hold references to the places in the HTML where we want to display things.
var scoreText = document.getElementById("score");
var currentWordBlanksText = document.getElementById("current-word-blanks");
var guessesText = document.getElementById("guesses");
var guessedLettersText = document.getElementById("guesses-letters-list");

//Create variables associated with words
var friends = ['Ross', 'Rachel', 'Monica', 'Phoebe', 'Chandler', 'Joey', 'Marcel'];
var individualFriends = "";
var lettersInFriends = [];
var blanksAndSuccesses = [];

//Populates blanks and successes with right number of blanks
for (var i = 0; i < friends.length; i++) {
    // Logs the Friend l at index position i to the console. This code is executed each we go through the loop.
    console.log(Friends[i]);
}
var individualChar = individualFriends.split("");


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
}

//

// Use a function similar to this to check if letter input by user matches letters of the current word blanks.
function vowelChecker(x) {
    var firstChar = x.toLowerCase().charAt(0);
    if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u') {
        console.log('The 1st letter is a vowel!');
    }
    else {
        console.log('The 1st letter is not a vowel!');

    }
}

// If the user input matches letters of work blank, then update values with a function similar to this
if ((userGuess === "r" && computerGuess === "s") ||
    (userGuess === "s" && computerGuess === "p") ||
    (userGuess === "p" && computerGuess === "r")) {
    wins++;
} else if (userGuess === computerGuess) {
    ties++;
} else {
    losses++;
}


// Display the user wins, current word letters, number of guesses remaining, and letters already guessed.
scoreText.textContent = wins;
currentWordBlanksText.textContent = currentWordBlanks;
guessesText.textContent = guesses;
guessedLettersText.textContent = guessedLetters;
