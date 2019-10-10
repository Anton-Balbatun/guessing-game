class GuessingGame {
    constructor() {
        
        this.guessNumber = 0
        this.min = 0
        this.max = 0
    }

    setRange(min, max) {
            this.min = min
            this.max = max
    }

    guess() {
         this.guessNumber =  Math.round((this.max + this.min)/2)
           // console.log( this.guessNumber)
            return this.guessNumber
        
    }

    lower() {
       
            this.max = this.guessNumber
        
    }

    greater() {
        
            this.min = this.guessNumber
        
    }
}

module.exports = GuessingGame;
