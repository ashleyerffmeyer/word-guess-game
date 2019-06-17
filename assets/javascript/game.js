

// Create variables that hold references to the places in the HTML where we want to display things.
var scoreText = document.getElementById("score");
var currentWordBlanksText = document.getElementById("current-word-blanks");
var guessesText = document.getElementById("guesses");
var guessedLettersText = document.getElementById("guessed-letters-list");

//Create variables associated with hangman words, amount of letters each word has, etc.
var friends = ['Ross', 'Rachel', 'Monica', 'Phoebe', 'Chandler', 'Joey'];
var selectedFriend = "";
var lettersInFriend = [];
var numOfBlanks = 0;
var answer = [];
var guessedLetters = [];

// Creating variables to hold the number of wins and number of remaining guesses. Wins start at 0. Remaining guesses start at 12.
var wins = 0;
var guesses = 12;

//Starting the game! This code is executed each time the game starts; it repopulates game variables to starting state.
function startGame() {

    // Gets values for variables
    selectedFriend = friends[Math.floor(Math.random() * friends.length)];
    lettersInFriend = selectedFriend.split("");
    numOfBlanks = lettersInFriend.length;

    //Resets variables
    answer = [];
    guesses = 12;
    guessedLetters = [];
    wins = 0;

    //for loop that resets the number of blanks needed
    for (var i = 0; i < numOfBlanks; i++) {
        answer.push("_");
    }

    console.log(selectedFriend);
    console.log(answer);
    console.log(lettersInFriend);
    console.log(numOfBlanks);

    /**document.getElementById("score").innerHTML = wins;**/
    document.getElementById("current-word-blanks").innerHTML = answer.join(" ");
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("guessed-letters-list").innerHTML = guessedLetters;


}

startGame();

//This function will compare letters from the user to letters in the answer
function compareLetters(input) {
    var isLetterInWord = false;
    for (var i = 0; i < numOfBlanks; i++) {
        if (lettersInFriend == input) {
            isLetterInWord = true;
        }
    }

    if (isLetterInWord) {
        for (var i = 0; i < numOfBlanks; i++) {
            if (lettersInFriend == input) {
                answer[i] = input;
            }
        }
    }
    else guessedLetters.push(input);
    guesses--;
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    //Determines which key was pressed
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    compareLetters(userGuess);
}


//This function finshes the game!
function endGame() {
    if (lettersInFriend.toString() == answer.toString()) {
        wins++
        document.getElementById("score").innerHTML = wins;
        startGame();
    }
    else if (guesses == 0) {
        alert("You Lost!");
        startGame();
    }
}