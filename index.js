const rockPaperSci = ["Rock", "Paper", "Scissors"];
let userInput = prompt("Rock, Paper, Scissors...SHOOT: ");

function getComputerChoice() {
    let compIndex = Math.floor(Math.random() * 3);
    return rockPaperSci[compIndex];
}

if (userInput === rockPaperSci[compIndex]) { // Tie
    console.log(`${compChoice}! TIE!`);
} else if (userInput === "Rock") { // Rock
    switch (compChoice) {
        case "Scissors":
            console.log(`${userInput} beats ${compChoice}! YOU WIN!`);
            break;
        case "Paper":
            console.log(`${compChoice} beats ${userInput}! YOU LOSE!`);
    }
} else if (userInput === "Paper") { // Paper
    switch (compChoice) {
        case "Rock":
            console.log(`${userInput} beats ${compChoice}! YOU WIN!`);
            break;
        case "Scissors":
            console.log(`${compChoice} beats ${userInput}! YOU LOSE!`);
    }
} else if (userInput === "Scissors") { // Scissors
    switch (compChoice) {
        case "Paper":
            console.log(`${userInput} beats ${compChoice}! YOU WIN!`);
            break;
        case "Rock":
            console.log(`${compChoice} beats ${userInput}! YOU LOSE!`);
    }
} 