// Global variables

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const ul = document.querySelector("ul");
let playerWins = 0, computerWins = 0;

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

function playRound(player, computer) {

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

// Function to use playRound and display overall winner

function roundLog(buttonChoice) {
    const li = document.createElement("li");
    li.textContent = `${playRound(buttonChoice, getComputerChoice())} - (Player: ${playerWins} | Computer: ${computerWins})`;
    ul.appendChild(li);

    if (playerWins === 5) {
        result.textContent = `Player you won the entire game! (Player: ${playerWins} | Computer: ${computerWins})`;
    } else if (computerWins === 5) {
        result.textContent = `Computer won the entire game! (Player: ${playerWins} | Computer: ${computerWins})`;
    }
}

// Rock button play
rock.addEventListener("click", () => {
    roundLog("ROCK");
})

// Paper button play
paper.addEventListener("click", () => {
    roundLog("PAPER");
})

// Scissors button play
scissors.addEventListener("click", () => {
    roundLog("SCISSORS");
})