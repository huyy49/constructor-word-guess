

var LETTER = require("./letter.js");
var letter = new LETTER();

var currentGuess = process.argv[2].toLowerCase();
// console.log(currentGuess);

var currentWord = [];

var checkResult = []

var Word = function (word) {
  this.word = word;
  var newList = word.split("");
  console.log(newList);
  this.printWord = function () {
    for (var i = 0; i < word.length; i++) {
      this.checkWord(i);
      var checkedLetter = newList[i];
      var letter = new LETTER(newList[i]);
      currentWord.push(letter.printLetter(checkedLetter));
    }
    console.log(currentWord);
  };
  this.checkWord = function (seq) {
    if (letter.checkLetter(newList[seq])) {
      checkResult[seq] = letter.isGuessed;
      console.log(letter.isGuessed);
    }
  }
  // console.log(currentWord);
}


var test = new Word("banana");
console.log(test.printWord());
