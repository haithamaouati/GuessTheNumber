let secretNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let attempts = 0;
const maxAttempts = 10;

function checkGuess() {
  let userGuess = parseInt(document.getElementById('guess').value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  attempts++;
  guesses.push(userGuess);

  if (userGuess === secretNumber) {
    showVictoryMessage();
  } else {
    let hint = userGuess < secretNumber ? 'Too low. Try again.' : 'Too high. Try again.';
    document.getElementById('result').innerHTML = hint;
    document.getElementById('guesses').innerHTML = `No. Of Guesses: ${attempts}<br>Guessed Numbers are: ${guesses.join(', ')}`;

    if (attempts === maxAttempts) {
      showLossMessage();
    }
  }
}

function showVictoryMessage() {
  alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
  askForReload();
}

function showLossMessage() {
  alert(`Sorry, you couldn't guess the number in ${maxAttempts} attempts. The correct number was ${secretNumber}.`);
  askForReload();
}

function askForReload() {
  if (confirm("Do you want to play again?")) {
    resetGame();
  } else {
    disableInput();
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guesses = [];
  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guesses').innerHTML = 'No. Of Guesses: 0<br>Guessed Numbers are: None';
  document.getElementById('guess').value = '';
  document.getElementById('guess').disabled = false;
}

function disableInput() {
  document.getElementById('guess').disabled = true;
}

mermaid.initialize({startOnLoad:true});
