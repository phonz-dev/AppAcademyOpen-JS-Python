const { syncBuiltinESMExports } = require('module');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const randomInRange = (min, max) => {
  const rand = Math.floor(Math.random() * (max - min + 1) + min);

  return rand;
}


let secretNumber;

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

const askRange = () => {
  rl.question('Enter a min number: ', min => {

    rl.question('Enter a max number: ', max => {
      secretNumber = randomInRange(Number(min), Number(max));

      console.log(`I am thinking of a number between ${min} and ${max}...`);
      askGuess();
    })

  })
}

askRange();
