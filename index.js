const rockPaperScissors = ["Rock", "Paper", "Scissors"];
let computerChoice = "";
let computerCompare = "";
let playerChoice = "";
let playerCompare = "";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let compIndex = Math.floor(Math.random() * 3);
    computerChoice = rockPaperScissors[compIndex];
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
    if (playerCompare === computerCompare) {
        console.log("It's a TIE!");
        getScore();
    } else if (playerCompare === "rock") {
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
    } else if (playerCompare === "paper") {
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
    } else if (playerCompare === "scissors") {
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

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

function playGame() {
    let winningScore = parseInt(prompt("Enter winning score: "));
    function playRematch() {
        let askToPlayAgain = "";
        let yes = 'y';
        let no = 'n';

        while (askToPlayAgain !== yes && askToPlayAgain !== no) {
            askToPlayAgain = prompt("Play again? (y/n): ").toLowerCase();
        }
        (askToPlayAgain === yes) ? playGame() : console.log("Thanks For Playing!");
    }

    while (playerScore !== winningScore && computerScore !== winningScore) {
        getComputerChoice();
        getPlayerChoice();
        getResult();
    }
    console.log('GAME OVER');
    resetGame();
    winningScore = 0;
    playRematch();
}

function getResultTernary() {
    (playerCompare === "rock") ? playedRock() : console.log("Test");
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
