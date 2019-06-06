function Letter(letter) {
  this.letter = letter;
  this.letterGuessed = false;

  this.printLetter = function () {
    if (this.letterGuessed) {
      return this.letter;
    } else {
      return "_";
    }
  };

  this.checkLetter = function (guess) {
    if (guess.toLowerCase() === this.letter.toLowerCase()) {
      this.letterGuessed = true;
      // console.log("Correct!");
    };
  };
};

module.exports = Letter;
