let secretNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let attempts = 0;

function checkGuess() {
  let userGuess = parseInt(document.getElementById('guess').value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  attempts++;
  guesses.push(userGuess);

  if (userGuess === secretNumber) {
    document.getElementById('result').innerHTML = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
    document.getElementById('guesses').innerHTML = `No. Of Guesses: ${attempts}<br>Guessed Numbers are: ${guesses.join(', ')}`;
    document.getElementById('guess').disabled = true;
  } else {
    let hint = userGuess < secretNumber ? 'Too low. Try again.' : 'Too high. Try again.';
    document.getElementById('result').innerHTML = hint;
    document.getElementById('guesses').innerHTML = `No. Of Guesses: ${attempts}<br>Guessed Numbers are: ${guesses.join(', ')}`;
  }
}
