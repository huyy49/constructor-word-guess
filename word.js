var Letter = require("./letter.js");

function Word(word) {
  this.word = word;
  this.letters = [];

  this.makeLetters = function() {
    var wordArr = this.word.split("");
    for(var i = 0; i < wordArr.length; i++) {
      var newLetter = new Letter(wordArr[i]);
      this.letters.push(newLetter);
    }
  };

  this.makeGuess = function(guess) {
    this.letters.forEach(letter => {
      letter.checkLetter(guess);
    });
  };

  this.printWord = function() {
    var wordPrinted = "";
    this.letters.forEach(letter => {
      wordPrinted += letter.printLetter() + " ";
    });
    return wordPrinted;
  };
};

module.exports = Word;
