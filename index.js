var word = require("./Word.js")

var inquirer = require("inquirer")

var wordBank = ["ARTICUNO", "ZAPDOS", "MOLTRES", "MEWTWO", "RAIKOU", "ENTEI", "SUICUNE", "LUGIA", "LATIAS", "LATIOS", "KYOGRE", "GROUDON", "RAYQUAZA", "UXIE","MESPRIT", "AZELF","REGISTEEL", "REGICE", "REGIROCK"]

var targetWord;

function start () {
    var randomWord = wordBank[Math.floor(Math.random()* wordBank.length)]

    targetWord = new word.Word()
    targetWord.createWord(randomWord)
    targetWord.printWord()
    
    // inquirer.prompt([
    //     {}
    // ])
}

start()