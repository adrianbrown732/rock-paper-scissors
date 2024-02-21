const rockPaperSci = ["Rock", "Paper", "Scissors"];
let computerChoice = "";
let computerCompare = "";
let playerChoice = "";
let playerCompare = "";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let compIndex = Math.floor(Math.random() * 3);
    computerChoice = rockPaperSci[compIndex];
    computerCompare = computerChoice.toLowerCase();
    return computerChoice;
}

function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper, Scissors...SHOOT: ");
    playerCompare = playerChoice.toLowerCase();
    return playerChoice;
}

function getScore() {
    console.log(`PLAYER: ${playerScore} COMPUTER: ${computerScore}`)
}

function getResult() {
    if (playerCompare === computerCompare) { // Tie
        console.log("It's a TIE!");
        getScore();
    } else if (playerCompare === "rock") { // Rock
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
    } else if (playerCompare === "paper") { // Paper
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
    } else if (playerCompare === "scissors") { // Scissors
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
}

function playGame() {
    while (playerScore !== 5 && computerScore !== 5) {
        getComputerChoice();
        getPlayerChoice();
        getResult();
    }
    console.log('GAME OVER');
}