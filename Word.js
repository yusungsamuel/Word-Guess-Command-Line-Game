var Letter = require("./Letter.js")

function Word () {
    this.letterArr = []
    this.createWord = function (wordie){
        for (var i = 0; i<wordie.length; i ++){
            this.letterArr.push(Letter(wordie[i]))
        }

    }
    this.printWord = function () {
        var theWord = ""
        for (var i = 0; i < letterArr.length; i ++){
            theWord += letterArr[i].check()
        }
        console.log(theWord)
    }
    this.checkLetter = function (letter) {
        for (var i = 0; i < letterArr.length; i ++){
            letterArr[i].compare(letter)
        }
    }
}

module.exports = {Word:Word}