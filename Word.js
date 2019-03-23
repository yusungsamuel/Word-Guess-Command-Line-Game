var letterFunction = require("./Letter.js")

function Word () {
    this.letterArr = []
    this.guessedAll = false
    this.createWord = function (wordie){
        for (var i = 0; i < wordie.length; i ++){
            this.letterArr.push(new letterFunction.letter(wordie[i]))
        }

    }
    this.printWord = function () {
        var theWord = ""
        for (var i = 0; i < this.letterArr.length; i ++){
            theWord += this.letterArr[i].check()
        }
        console.log(theWord)
    }
    this.checkLetter = function (letter) {
        for (var i = 0; i < this.letterArr.length; i ++){
            this.letterArr[i].compare(letter)
        }
    }
    this.checkCompleteness = function (){
        for (var i = 0; i < this.letterArr.length; i ++){
            if (this.letterArr[i].guessed){
                this.guessedAll = true
            }
            else {
                this.guessedAll = false
            }
        }
    }
}




module.exports = {Word:Word}