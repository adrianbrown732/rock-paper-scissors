const rockPaperScissors = ["Rock", "Paper", "Scissors"];
let computerChoice = "";
let computerCompare = "";
let playerChoice = "";
let playerCompare = "";
let playerScore = 0;
let computerScore = 0;
let winningScore;

function setGameScore() {
  let invalidScore = 0;
  let gameScore;
  do {
    gameScore = parseInt(prompt("Enter winning score: "));
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

  function invalidResult() {
    console.log(
      `${playerChoice} is invalid. Please enter 'Rock', 'Paper', or 'Scissors'`
    );
  }

  while (
    playerCompare !== "rock" &&
    playerCompare !== "paper" &&
    playerCompare !== "scissors"
  ) {
    invalidResult();
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
    case "Scissors":
      console.log(`${playerChoice} beats ${computerChoice}! YOU WIN!`);
      playerScore++;
      getScore();
      break;
    case "Paper":
      console.log(`${computerChoice} beats ${playerChoice}! YOU LOSE!`);
      computerScore++;
      getScore();
  }
}

function userPlaysPaper() {
  switch (computerChoice) {
    case "Rock":
      console.log(`${playerChoice} beats ${computerChoice}! YOU WIN!`);
      playerScore++;
      getScore();
      break;
    case "Scissors":
      console.log(`${computerChoice} beats ${playerChoice}! YOU LOSE!`);
      computerScore++;
      getScore();
  }
}

function userPlaysScissors() {
  switch (computerChoice) {
    case "Paper":
      console.log(`${playerChoice} beats ${computerChoice}! YOU WIN!`);
      playerScore++;
      getScore();
      break;
    case "Rock":
      console.log(`${computerChoice} beats ${playerChoice}! YOU LOSE!`);
      computerScore++;
      getScore();
  }
}

function getResult() {
  playerCompare === computerCompare
    ? tieGame()
    : playerCompare === "rock"
    ? userPlaysRock()
    : playerCompare === "paper"
    ? userPlaysPaper()
    : userPlaysScissors();
}

function getScore() {
  console.log(`PLAYER: ${playerScore} COMPUTER: ${computerScore}`);
}

function playGame() {
  winningScore = setGameScore();

  function playRematch() {
    let askToPlayAgain = "";
    let yes = "y";
    let no = "n";

    while (askToPlayAgain !== yes && askToPlayAgain !== no) {
      askToPlayAgain = prompt("Play again? (y/n): ").toLowerCase();
    }
    askToPlayAgain === yes ? playGame() : console.log("Thanks For Playing!");
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    winningScore = 0;
  }
  do {
    getComputerChoice();
    getPlayerChoice();
    getResult();
  } while (playerScore !== winningScore && computerScore !== winningScore);
  console.log("GAME OVER");
  resetGame();
  playRematch();
}
