var inquirer = require("inquirer");

// var WORD = require("./word.js");
// var word = new WORD();

var wordList = ["apple", "banana", "pear", "peach", "watermelon"];

var random = Math.floor(Math.random() * 5);
var wordChosen = wordList[random];
// console.log(wordChosen);
var guessAllow = 9;

for (var i = 0; i <= guessAllow; i--) {
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "Guess a letter!"
      }])
    .then(function (answer) {
      function(err) {
        if (err) throw err;
        word.printWord(wordChosen);
      }
    });
