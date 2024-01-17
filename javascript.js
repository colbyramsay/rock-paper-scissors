function getComputerChoice() {
    const weapons = ["ROCK", "PAPER", "SCISSORS"];
    let weapon = weapons [Math.floor(Math.random() * weapons.length)];

    return weapon;
}

function getPlayerChoice() {
        let userWeapon = "";

        while (userWeapon != "ROCK" && userWeapon != "PAPER" && userWeapon != "SCISSORS") {
                userWeapon = prompt("Please enter ROCK, PAPER, or SCISSORS").toUpperCase();
                alert ("You chose " + userWeapon);
                if (userWeapon != "ROCK" && userWeapon != "PAPER" && userWeapon != "SCISSORS") {
                alert ("INVALID ENTRY! Please enter only ROCK, PAPER, or SCISSORS");
                } else {
                        break;
                }
        }
        
        return userWeapon;
}

function playRound(playerSelection, computerSelection) {
        let playerScore = 0;
        let computerScore = 0;

        if (computerSelection === "ROCK" && playerSelection === "ROCK") {
                alert("We have a tie!");
        } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
                alert("Player wins! PAPER beats ROCK.");
                playerScore += 1;
        } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
                alert("Computer wins! ROCK beats SCISSORS.");
                computerScore += 1;
        } else if (computerSelection === "PAPER" && playerSelection === "PAPER") {
                alert("We have a tie!");
        } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
                alert("Player wins! SCISSORS beat PAPER.");
                playerScore += 1;
        } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
                alert("Computer wins! PAPER beats ROCK.");
                computerScore += 1;
        } else if (computerSelection === "SCISSORS" && playerSelection === "SCISSORS") {
                alert("We have a tie!");
        } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
                alert("Player wins! ROCK beats SCISSORS.");
                playerScore += 1;
        } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
                alert("Computer wins! SCISSORS beats PAPER.");
                computerScore += 1;
        } else {
                alert("INVALID ENTRY!");
        }
        
        return [playerScore, computerScore];
}

function game() {
        let playerScore = 0;
        let computerScore = 0;
        let currentScore = [];
        let finalScore = [];

        for (i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        alert("Player: " + playerSelection + " vs. Computer: " + computerSelection);
        currentScore = playRound(playerSelection, computerSelection);
        playerScore += currentScore [0];
        computerScore += currentScore [1];
        finalScore = [playerScore, computerScore];
        }

        if (playerScore > computerScore) {
                alert ("Player Wins! Player: " + playerScore + " to Computer: " + computerScore);
        } else if (computerScore > playerScore) {
                alert ("Computer Wins! Computer: " + computerScore + " to Player: " + playerScore);
        } else {
                alert ("Tie Game! Player: " + playerScore + " to Computer: " + computerScore);
        }

        return finalScore;
}

function gameBtn(playerSelection) {
        let playerScore = 0;
        let computerScore = 0;
        let currentScore = [];
        let finalScore = [];

        //for (i = 0; i < 5; i++) {
        //const playerSelection = "ROCK";
        const computerSelection = getComputerChoice();
        alert("Player: " + playerSelection + " vs. Computer: " + computerSelection);
        currentScore = playRound(playerSelection, computerSelection);
        playerScore += currentScore [0];
        computerScore += currentScore [1];
        finalScore = [playerScore, computerScore];
        //}

        if (playerScore > computerScore) {
                alert ("Player Wins! Player: " + playerScore + " to Computer: " + computerScore);
        } else if (computerScore > playerScore) {
                alert ("Computer Wins! Computer: " + computerScore + " to Player: " + playerScore);
        } else {
                alert ("Tie Game! Player: " + playerScore + " to Computer: " + computerScore);
        }

        return finalScore;
}


//game();

document.querySelector('#buttonRock').addEventListener("click", function () {
        gameBtn("ROCK");
});

document.querySelector('#buttonPaper').addEventListener("click", function () {
        gameBtn("PAPER");
});

document.querySelector('#buttonScissors').addEventListener("click", function () {
        gameBtn("SCISSORS");
});