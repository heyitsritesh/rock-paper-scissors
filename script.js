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

console.log(getComputerChoice());