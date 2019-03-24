var word = require("./Word.js")

var inquirer = require("inquirer")

var wordBank = ["ARTICUNO", "ZAPDOS", "MOLTRES", "MEWTWO", "RAIKOU", "ENTEI", "SUICUNE", "LUGIA", "LATIAS", "LATIOS", "KYOGRE", "GROUDON", "RAYQUAZA", "UXIE", "MESPRIT", "AZELF", "REGISTEEL", "REGICE", "REGIROCK"];

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



var targetWord;

function start() {
    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]
    console.log("New Word\n")
    targetWord = new word.Word()
    targetWord.createWord(randomWord)
    targetWord.printWord()
    console.log("Chances Remain: " + targetWord.chance)    


    function promptForLetter() {
        inquirer.prompt([
            {
                message: "Guess a letter",
                name: "guess",
                validate: function (input) {
                    if (input.length !== 1 || alphabet.indexOf(input.toUpperCase()) === -1) {
                        return false
                    }
                    else {
                        return true
                    }
                }
            }
        ]).then(function (response) {
            targetWord.checkLetter(response.guess.toUpperCase())
            targetWord.printWord()
            console.log("Chances Remain: " + targetWord.chance + "\n")
            if(targetWord.chance < 1){
                console.log("GAME OVER!!")
                start()
            }
            else{
                targetWord.checkCompleteness(start,promptForLetter)
            }
                
    
    
        })
    }
    
    promptForLetter()






}




start()