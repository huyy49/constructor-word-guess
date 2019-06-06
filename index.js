var Word = require("./word.js");
var inquirer = require("inquirer");

var wordList = [
  "Aries", "Taurus", "Gemini", "Libra", "Scorpio", "Sagittarius",
  "Cancer", "Leo", "Virgo", "Capricorn", "Aquarius", "Pisces",
];

var guesses = 0;
var pickedWords, word, currentWord, guessedWords, anyGuessed, wordGuessedArr;
var numGuessedCurrent = 0, numGuessedLast = 0;

function init() {
  pickedWords = [];
  console.log("Welcome to Word Guess!\n");
  playGame();
};

function playGame() {
  currentWord = "";
  guesses = 10;
  if (pickedWords.length < wordList.length) {
    currentWord = getWord();
  } else {
    // WIN CONDITION
    console.log("You have guessed all zodiacs!\n");
    // continueGame();
  };
  if (currentWord) {
    word = new Word(currentWord);
    // console.log(currentWord);
    word.makeLetters();
    guessedWords = [];
    promptGuess();
  };
};

function getWord() {
  var random = Math.floor(Math.random() * wordList.length);
  var randomWord = wordList[random];
  if (pickedWords.indexOf(randomWord) === -1) {
    pickedWords.push(randomWord);
    return randomWord;
  } else {
    return getWord();
  };
};

function promptGuess() {
  var checker = [];
  inquirer.prompt([
    {
      name: "guessedletter",
      message: word.printWord() +
        "\nGuesses Left: " + guesses +
        "\nGuess a letter:"
    }
  ])
    .then(function (answer) {
      word.makeGuess(answer.guessedletter);
      wordGuessedArr = word.printWord(answer.guessedletter).replace(/\s/g, "").split("");
      if (!answer.guessedletter.match(/^[a-zA-Z]+$/) || answer.guessedletter.length > 1) {
        console.log("Please enter a letter!\n");
        promptGuess();
      } else if (guessedWords.indexOf(answer.guessedletter) !== -1) {
        console.log("You already guessed the letter! Try another one!\n");
        promptGuess();
      } else {
        guessResult();
        guessedWords.push(answer.guessedletter);
      };
    });
};

function guessResult() {
  // && wordGuessedArr.indexOf("_") !== -1
  if (guesses > 0) {
    numGuessedCurrent = 0;
    for (var i = 0; i < wordGuessedArr.length; i++) {
      if (wordGuessedArr[i] != '_') {
        // console.log("word: " + wordGuessedArr[i]);
        numGuessedCurrent += 1;
      };
    };
  };
  // console.log("last: " + numGuessedLast + " current: " + numGuessedCurrent + " length: " + wordGuessedArr.length);
  if (numGuessedLast < numGuessedCurrent) {
    console.log("Correct!\n");
    if (numGuessedCurrent === wordGuessedArr.length) {
      console.warn("Congratulations! You guessed the word!");
      console.log("Word: " + word.word + "\n");
      numGuessedLast = 0;
      continueGame();
    } else {
      numGuessedLast = numGuessedCurrent;
      // numGuessedCurrent = 0;
      promptGuess();
    };
  } else {
    console.log("Incorrect!\n");
    if (guesses > 1) {
      guesses--;
      promptGuess();
    } else if (guesses === 1) {
      console.error("You ran out of guesses!");
      console.log("Word: " + word.word + "\n");
      numGuessedLast = 0;
      continueGame();
    };
  };
};

function continueGame() {
  inquirer.prompt([
    {
      name: "continue",
      type: "list",
      message: "Would you like to play again?",
      choices: ["Yes", "No"]
    }
  ])
    .then(function (answer) {
      if (answer.continue === "Yes") {
        playGame();
      } else {
        console.log("Thank you for playing!\n");
      }
    });
};

init();
