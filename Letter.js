function Letter(letter){
    this.letter = letter,
    this.underscore = "_",
    this.isCorrectGuess = false,

    this.writeGuessed = function() {
        if(this.isCorrectGuess ===true) {
            console.log(this.letter)
        }
        else {
            console.log(underscore)
        }
    };
    this.checkGuessed =  function(guessedLetter) {
        if (guessedLetter === this.letter) {
            this.isCorrectGuess = true;
        }
        else {
            this.isCorrectGuess = false;
        }
    };
};

module.exports = Letter;