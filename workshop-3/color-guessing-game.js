COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow', 'purple']

let reference = COLORS_ARRAY.length - 1;
const targetIndex = Math.floor(Math.random() * reference);
const target = COLORS_ARRAY[targetIndex]
console.log('The target is',target);

function runGame () {
  let guess = '';
  let numTries = 0;
  do {
    guess = prompt('I am thinking of one of these colors: \n\n' + COLORS_ARRAY.join(', ') + '. \n\n What color am I thinking of? \n').toLowerCase();
    
    if (guess === null) {
      alert('You have ended the game. \n\n Click Start Game to play again.')
      return;
    }
    correct = checkGuess(guess, target);
    numTries++;
  } while (!correct);
  let correctWord = 'guess'
  if (numTries > 1) {
    correctWord = 'guesses'
  }
  alert(`Congratulations! You have guessed the correct color! \n\n It took you ${numTries} ${correctWord} to finish the game!\n\nHit OK to see the background.`);

  document.body.style.background = guess;
}

function checkGuess (guess, target) {
  let correct = false;

  if(!COLORS_ARRAY.includes(guess)) {
    alert("Sorry, I don't recognize your color.");
    } else if (guess > target) {
      alert("Sorry, your guess is incorrect. \n\n Hint: Your color is alphabetically higher than mine.");
    } else if (guess < target) {
      alert("Sorry, your guess is incorrect. \n\n Hint: //Your color is alphabetically lower than mine.");
    } else {
      correct = true;
    }
    return correct;
}
