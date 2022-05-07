const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const secretNumber = 10;

const checkGuess = guess => {
  if (guess === secretNumber) {
    console.log('Correct!');
    return true;
  }

  if (guess > secretNumber) {
    console.log('Too high.');
  } else {
    console.log('Too low.');
  }

  return false;
}

const askGuess = () => {
  rl.question('Enter a guess: ', answer => {
    const guessIsRight = checkGuess(Number(answer));

    if (guessIsRight) {
      console.log('You win!');
      rl.close();
    } else {
      askGuess();
    }

  })
}
