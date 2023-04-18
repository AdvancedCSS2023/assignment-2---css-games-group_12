const playerChoices = document.querySelectorAll('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const resultText = document.querySelector('.result-text');

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function updateResult(result) {
  if (result === 'tie') {
    resultText.textContent = "It's a tie!";
  } else if (result === 'win') {
    resultText.textContent = "You win!";
  } else {
    resultText.textContent = "You lose!";
  }
}

function resetGame() {
  computerChoice.classList.remove('rock', 'paper', 'scissors');
  resultText.textContent = 'Choose your weapon!';
}

function playGame(e) {
  const playerSelection = e.target.classList[1];
  const computerSelection = computerPlay();
  computerChoice.classList.add(computerSelection);
  const result = playRound(playerSelection, computerSelection);
  updateResult(result);
}

playerChoices.forEach(choice => {
  choice.addEventListener('click', playGame);
});

computerChoice.addEventListener('animationend', resetGame);
