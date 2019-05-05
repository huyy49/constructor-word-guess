var currentGuess = process.argv[2].toLowerCase();

var Letter = function (char) {
  this.char = char;
  this.isGuessed = false;
  this.printLetter = function () {
    this.checkLetter();
    console.log ("this.isGuessed: " + this.isGuessed);
    if (this.isGuessed) {
      return (char);
    } else {
      return ("_");
    }
  };
  this.checkLetter = function (check) {
    console.log("current guess: " + currentGuess.toLowerCase());
    console.log("check: " + check);
    if (currentGuess.toLowerCase() === check) {
      Letter.isGuessed = true;
      // return true;
      console.log("isGuessed: " + Letter.isGuessed);
    } else {
      Letter.isGuessed = false;
      console.log("isGuessed: " + Letter.isGuessed);
    }
  }
}

// var test = new Letter(process.argv[2], process.argv[3]).printLetter();
// console.log(test);

module.exports = Letter;
