function Letter (character) {
    this.character = character
    this.guessed = false;
    this.check = function (){
        if (guessed){
            return this.character + " "
        }
        else {
            return " _"
        }
    }
    this.compare = function (attempt){
        if (attempt === this.character){
            this.guessed = true
        }
    }
}