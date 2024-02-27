let computerChoice = "";
let computerCompare = "";
let playerChoice = "";
let playerCompare = "";
let playerScore = 0;
let computerScore = 0;
let winningScore = 0;
let playerWins = false;

const rockPaperScissors = ["Rock", "Paper", "Scissors"];
const youWin = () =>
  console.log(`${playerChoice} beats ${computerChoice}! YOU WIN!`);
const youLose = () =>
  console.log(`${computerChoice} beats ${playerChoice}! YOU LOSE!`);
function endMatch() {
  console.log("MATCH OVER");
  playerWins ? console.log("YOU WIN!") : console.log("YOU LOSE!");
}
function endGame() {
  console.log("GAME OVER");
  console.log("Thanks For Playing!");
}
function setGameScore() {
  let invalidScore = 0;
  let gameScore;
  do {
    gameScore = parseInt(prompt("First player to (enter number) wins!"));
  } while (gameScore <= invalidScore || !Number.isInteger(gameScore));
  return gameScore;
}

function getComputerChoice() {
  let compIndex = Math.floor(Math.random() * 3);
  computerChoice = rockPaperScissors[compIndex];
  computerCompare = computerChoice.toLowerCase();
  return computerChoice;
}

function getPlayerChoice() {
  playerChoice = prompt("Rock, Paper, Scissors...SHOOT: ");
  playerCompare = playerChoice.toLowerCase();

  function invalidInput() {
    const invalidMessage = `${playerChoice} is invalid. Please enter 'Rock', 'Paper', or 'Scissors'`;
    console.log(invalidMessage);
  }

  while (
    playerCompare !== "rock" &&
    playerCompare !== "paper" &&
    playerCompare !== "scissors"
  ) {
    invalidInput();
    getPlayerChoice();
  }
  return playerChoice;
}

function tieGame() {
  console.log("It's a TIE!");
  getScore();
}

function userPlaysRock() {
  switch (computerChoice) {
    case rockPaperScissors[2]:
      youWin();
      playerScore++;
      getScore();
      break;
    case rockPaperScissors[1]:
      youLose();
      computerScore++;
      getScore();
  }
}

function userPlaysPaper() {
  switch (computerChoice) {
    case rockPaperScissors[0]:
      youWin();
      playerScore++;
      getScore();
      break;
    case rockPaperScissors[2]:
      youLose();
      computerScore++;
      getScore();
  }
}

function userPlaysScissors() {
  switch (computerChoice) {
    case rockPaperScissors[1]:
      youWin();
      playerScore++;
      getScore();
      break;
    case rockPaperScissors[0]:
      youLose();
      computerScore++;
      getScore();
  }
}

function getResult() {
  let compareTie = playerCompare === computerCompare;
  let compareRock = playerCompare === "rock";
  let comparePaper = playerCompare === "paper";

  compareTie
    ? tieGame()
    : compareRock
    ? userPlaysRock()
    : comparePaper
    ? userPlaysPaper()
    : userPlaysScissors();
}

function getScore() {
  console.log(`PLAYER: ${playerScore} COMPUTER: ${computerScore}`);
}

function didPlayerWin() {
  playerScore > computerScore ? (playerWins = true) : (playerWins = false);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  winningScore = 0;
  playerWins = false;
}

function askForRematch() {
  let askToPlayAgain = "";
  let yes = "y";
  let no = "n";
  let playAgain = "Play again? (y/n): ";

  while (askToPlayAgain !== yes && askToPlayAgain !== no) {
    askToPlayAgain = prompt(playAgain.toLowerCase());
  }
  askToPlayAgain === yes ? playGame() : endGame();
}

function playGame() {
  alert("WELCOME TO ROCK, PAPER, SCISSORS!!");
  winningScore = setGameScore();
  do {
    getComputerChoice();
    getPlayerChoice();
    getResult();
  } while (playerScore !== winningScore && computerScore !== winningScore);
  didPlayerWin();
  endMatch();
  resetGame();
  askForRematch();
}
