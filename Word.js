function Word () {
    this.letterArr = []
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