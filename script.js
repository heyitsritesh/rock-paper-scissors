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
    let decision;

    if ((player === "ROCK" && computer === "SCISSORS") || (player === "PAPER" && computer === "ROCK") || (player === "SCISSORS" && computer === "PAPER")) {
        return `You Won! ${player} beats ${computer}`
    }

    else if (player === computer) {
        return "It's a tie!"
    }

    else {
        return `You Lose! ${computer} beats ${player}`
    }
}

const playerSelection = "rock";
console.log(playRound(playerSelection, getComputerChoice()));