//Create variables associated with hangman words, amount of letters each word has, images etc.
var friends = ['ross', 'rachel', 'monica', 'phoebe', 'chandler', 'joey'];
var selectedFriend = "";
var lettersInFriend = [];
var numOfBlanks = 0;
var answer = [];
var guessedLetters = [];
//var imageArray = ['friends1.jpg', 'friends2.jpg', 'friends3.jpg', 'friends4.jpg', 'friends5.jpg', 'friends6.jpg'];

// Creating variables to hold the number of wins and number of remaining guesses. Wins start at 0. Remaining guesses start at 12.
var wins = 0;
var guesses = 12;

//Starting the game! This code is executed each time the game starts; it repopulates game variables to starting state.
function startGame() {

    // Gets values for variables
    selectedFriend = friends[Math.floor(Math.random() * friends.length)];
    lettersInFriend = selectedFriend.split("");
    numOfBlanks = lettersInFriend.length;
    //var num = Math.floor(Math.random() * (imageArray.length + 1));

    //Resets variables
    answer = [];
    guesses = 12;
    guessedLetters = [];

    //for loop that resets the number of blanks needed
    for (var i = 0; i < numOfBlanks; i++) {
        answer.push("_");
        //document.canvas.src = "images/" + imageArray[num];
    }

    document.getElementById("score").innerHTML = wins;
    document.getElementById("current-word-blanks").innerHTML = answer.join(" ");
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("guessed-letters-list").innerHTML = guessedLetters;
}

//This function will compare letters from the user to letters in the answer
function compareLetters(input) {
    var isLetterInWord = false;
    for (var i = 0; i < numOfBlanks; i++) {
        if (lettersInFriend.indexOf(input) > -1) {
            isLetterInWord = true;
        }
    }
    if (isLetterInWord) {
        for (var i = 0; i < numOfBlanks; i++) {
            if (lettersInFriend[i] == input) {
                answer[i] = input;

            }
        }
    }
    else {
        guesses--;
        guessedLetters.push(input);
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("guessed-letters-list").innerHTML = guessedLetters;
    }
}

//This function finshes the game!
function endGame() {
    document.getElementById("current-word-blanks").innerHTML = answer.join(" ");

    if (lettersInFriend.toString() == answer.toString()) {
        wins++;
        document.getElementById("score").innerHTML = wins;
        startGame();
    }
    else if (guesses == 0) {
        alert("You Lost!");
        startGame();
    }
}

// Run this function to start the game
startGame();

// This function is run whenever the user presses a key

document.onkeyup = function (event) {
    //Determines which key was pressed
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    compareLetters(userGuess);
    endGame();
}