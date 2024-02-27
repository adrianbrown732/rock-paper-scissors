let computerChoice = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let winningScore = 5;

const rockPaperScissors = ["Rock", "Paper", "Scissors"];
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset");
const results = document.querySelector(".results");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resetDisplay = () => {
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  results.textContent = "";
};
const youWin = () =>
  (results.textContent = `${playerChoice} beats ${computerChoice}!`);
const youLose = () =>
  (results.textContent = `${computerChoice} beats ${playerChoice}!`);

rockButton.addEventListener("click", () => {
  playerChoice = "Rock";
  playRound();
});
paperButton.addEventListener("click", () => {
  playerChoice = "Paper";
  playRound();
});
scissorsButton.addEventListener("click", () => {
  playerChoice = "Scissors";
  playRound();
});
resetButton.addEventListener("click", resetGame);

function playRound() {
  getComputerChoice();
  playerChoice === computerChoice
    ? tieGame()
    : playerChoice === "Rock"
    ? userPlaysRock()
    : playerChoice === "Paper"
    ? userPlaysPaper()
    : userPlaysScissors();
  checkWinner();
}

function getComputerChoice() {
  let compIndex = Math.floor(Math.random() * 3);
  computerChoice = rockPaperScissors[compIndex];
  return computerChoice;
}

function tieGame() {
  results.textContent = "TIE";
}

function userPlaysRock() {
  switch (computerChoice) {
    case rockPaperScissors[2]:
      youWin();
      addPlayerScore();
      break;
    case rockPaperScissors[1]:
      youLose();
      addComputerScore();
  }
}

function userPlaysPaper() {
  switch (computerChoice) {
    case rockPaperScissors[0]:
      youWin();
      addPlayerScore();
      break;
    case rockPaperScissors[2]:
      youLose();
      addComputerScore();
  }
}

function userPlaysScissors() {
  switch (computerChoice) {
    case rockPaperScissors[1]:
      youWin();
      addPlayerScore();
      break;
    case rockPaperScissors[0]:
      youLose();
      addComputerScore();
  }
}

function addPlayerScore() {
  playerScore++;
  playerScoreDisplay.textContent = playerScore;
}

function addComputerScore() {
  computerScore++;
  computerScoreDisplay.textContent = computerScore;
}

function checkWinner() {
  playerScore === winningScore
    ? endGame("player")
    : computerScore === winningScore
    ? endGame("computer")
    : null;
}

function endGame(winner) {
  let para = document.createElement("p");
  para.textContent = `${winner.toUpperCase()} WINS`;
  results.appendChild(para);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  resetDisplay();
}
