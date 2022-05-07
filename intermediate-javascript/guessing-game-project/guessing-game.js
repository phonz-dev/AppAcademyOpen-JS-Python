const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class GuessingGame {
  constructor() {
    this.secretNumber = null;
    this.numAttempts = 1;
  }

  askRange = () => {
    rl.question('Enter a min number: ', min => {

      rl.question('Enter a max number: ', max => {
        this.secretNumber = GuessingGame.randomInRange(
            Number(min), Number(max)
          );

        console.log(`I am thinking of a number between ${min} and ${max}...`);

        if (this.numAttempts <= 0) {
          console.log('You lose!');
          rl.close();
        } else {
          this.askGuess();
        }

      })

    })
  }

  askGuess = () => {
    rl.question('Enter a guess: ', guess => {
      this.numAttempts -= 1;

      if (this.numAttempts < 0) {
        console.log('You lose!');
        rl.close();
      } else if (this.checkGuess(guess)) {
        console.log('You win!');
        rl.close();
      } else {
        this.askGuess();
      }

    })
  }

  checkGuess = guess => {
    if (Number(guess) === this.secretNumber) {
      console.log('Correct!');

      return true;
    }

    if (guess > this.secretNumber) {
      console.log('Too high.');
    } else {
      console.log('Too low.');
    }

    return false;
  }

  static randomInRange = (min, max) => {
    const rand = Math.floor(Math.random() * (max - min + 1) + min);

    return rand;
  }
}
