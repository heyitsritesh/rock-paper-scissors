// Global variables and inputs

let playerWins = 0, computerWins = 0;

let playerSelection = prompt("Please enter your choice out of Rock, Paper, and Scissors");

let player = playerSelection.toUpperCase();

// Function to get the random choice taken by the computer

function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);

    switch(choiceNum) {
        case 0:
            return "ROCK";
        
        case 1:
            return "PAPER";
        
        case 2:
            return "SCISSORS";
    }
}

// Function to play a single round

function playRound(playerSelection, computerSelection) {

    switch(true) {
        case player === "ROCK" && computerSelection === "SCISSORS":
        case player === "PAPER" && computerSelection === "ROCK":
        case player === "SCISSORS" && computerSelection === "PAPER":
            playerWins++;
            return `You Won! ${player} beats ${computerSelection}`;
        
        case player === computerSelection:
            return "It's a tie!"
        
        default:
            computerWins++;
            return `You Lose! ${computerSelection} beats ${player}`;
    }

}

// Loop to play 5 times

function playGame() {
    for (let i=0; i<5; i++) {
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

// Making sure input is valid

if (player === "ROCK" || player === "PAPER" || player === "SCISSORS") {
    
    // Invoke the loop and play 5 times

    playGame();

    // Print the final calculated result
    
    if (playerWins > computerWins) {
        console.log(`RESULT: Player you won the entire game!
        Your score: ${playerWins}
        Computer's Score: ${computerWins}`);
    }

    else if (playerWins === computerWins) {
        console.log(`RESULT: It's an overall tie!
        Your score: ${playerWins}
        Computer's Score: ${computerWins}`);
    }

    else {
        console.log(`RESULT: Computer won the entire game!
        Your score: ${playerWins}
        Computer's Score: ${computerWins}`);
    }
}

else {
    console.log("Wrong input, please enter again");
}