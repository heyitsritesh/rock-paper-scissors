// Global variables

let playerWins = 0, computerWins = 0;

// Function to get the random choice taken by the computer

function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);

    switch(choiceNum) {
        case 0:
            return "Rock";
        
        case 1:
            return "Paper";
        
        case 2:
            return "Scissors";
    }
}

// Function to play a single round

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

    console.log(`Computer chose ${computer} and you chose ${player}`);

    switch(true) {
        case player === "ROCK" && computer === "SCISSORS":
        case player === "PAPER" && computer === "ROCK":
        case player === "SCISSORS" && computer === "PAPER":
            playerWins++;
            return `You Won! ${player} beats ${computer}`;
        
        case player === computer:
            return "It's a tie!"
        
        default:
            computerWins++;
            return `You Lose! ${computer} beats ${player}`;
    }

}

let playerSelection = "rock";

// let playerSelection = prompt("Please enter your choice out of Rock, Paper, and Scissors");
console.log(playRound(playerSelection, getComputerChoice()));
console.log(`Player wins = ${playerWins}
Computer wins = ${computerWins}`);