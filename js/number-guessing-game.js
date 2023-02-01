function runGame() {

  let guessString = '';
  let guessNumber = 0;
  let correct = false;
  const randomNumber = Math.random() * 100;
  const randomInteger = Math.floor(randomNumber);
  const target = randomInteger + 1;

  //const target = Math.floor(Math.random() *100) + 1;
  
  do {
    guessString = prompt('I am thinking of a number in the range 1 to 100. \n\n')
    guessNumber = +guessString;
    correct = checkGuess(guessNumber, target);
  } while (!correct);
}