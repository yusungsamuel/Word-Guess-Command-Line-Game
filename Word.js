var letterFunction = require("./Letter.js")

function Word () {
    this.letterArr = [];
    this.guessedAll = false;
    this.currentWord = ""
    this.chance = 7
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

        if(theWord === this.currentWord){
            this.chance --
        }
        // console.log("Current: " + this.currentWord)
        console.log(theWord + "\n")
        
    }
    this.checkLetter = function (letter) {
        var theCurrentWord = ""
        
        for (var i = 0; i < this.letterArr.length; i ++){
            theCurrentWord += this.letterArr[i].check()
        }
        this.currentWord = theCurrentWord
       
        for (var i = 0; i < this.letterArr.length; i ++){
            this.letterArr[i].compare(letter)
        } 

    }
    this.checkCompleteness = function (callback1, callback2){
        var guessedAllArr = [];
        for (var i = 0; i < this.letterArr.length; i ++){
            guessedAllArr.push(this.letterArr[i].guessed)  
        }
        if (!guessedAllArr.includes(false)){
            this.guessedAll = true
        }

        if(this.guessedAll){
            console.log("You Got It!")
            callback1()
        }
        else {
            console.log("Keep Going!")
            callback2()
        };
    }
}




module.exports = {Word:Word}