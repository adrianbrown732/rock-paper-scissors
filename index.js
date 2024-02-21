const rockPaperSci = ["Rock", "Paper", "Scissors"];
function randomNum() {
    return Math.floor(Math.random() * 3);
}
let compIndex = randomNum();
let compChoice = rockPaperSci[compIndex];
let userInput = prompt("Rock, Paper, Scissors...SHOOT: ");

if (userInput === rockPaperSci[compIndex]) { // Tie
    console.log(`${compChoice}! TIE!`);
} else if (userInput === "Rock") { // Rock
    switch (compChoice) {
        case "Scissors":
            console.log(`${compChoice}! YOU WIN!`);
            break;
        case "Paper":
            console.log(`${compChoice}! YOU LOSE!`);
    }
} else if (userInput === "Paper") { // Paper
    switch (compChoice) {
        case "Rock":
            console.log(`${compChoice}! YOU WIN!`);
            break;
        case "Scissors":
            console.log(`${compChoice}! YOU LOSE!`);
    }
} else if (userInput === "Scissors") { // Scissors
    switch (compChoice) {
        case "Paper":
            console.log(`${compChoice}! YOU WIN!`);
            break;
        case "Rock":
            console.log(`${compChoice}! YOU LOSE!`);
    }
} 