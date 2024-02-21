const rockPaperSci = ["Rock", "Paper", "Scissors"];
let computerChoice = "";
let computerCompare = "";
let playerChoice = "";
let playerCompare = "";

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

function getResult() {
    if (playerCompare === computerCompare) { // Tie
        console.log("It's a TIE!");
    } else if (playerCompare === "rock") { // Rock
        switch (computerChoice) {
            case "Scissors":
                console.log(`${playerChoice} beats ${computerChoice}! YOU WIN!`);
                break;
            case "Paper":
                console.log(`${computerChoice} beats ${playerChoice}! YOU LOSE!`);
        }
    } else if (playerCompare === "paper") { // Paper
        switch (computerChoice) {
            case "Rock":
                console.log(`${playerChoice} beats ${computerChoice}! YOU WIN!`);
                break;
            case "Scissors":
                console.log(`${computerChoice} beats ${playerChoice}! YOU LOSE!`);
        }
    } else if (playerCompare === "scissors") { // Scissors
        switch (computerChoice) {
            case "Paper":
                console.log(`${playerChoice} beats ${computerChoice}! YOU WIN!`);
                break;
            case "Rock":
                console.log(`${computerChoice} beats ${playerChoice}! YOU LOSE!`);
        }
    }
}
