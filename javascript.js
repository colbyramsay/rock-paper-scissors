/*
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
*/

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
        const weapons = ["ROCK", "PAPER", "SCISSORS"];
        let weapon = weapons [Math.floor(Math.random() * weapons.length)];
        
        return weapon;
}

function playRound(playerSelection, computerSelection) {
        
        if (computerSelection === "ROCK" && playerSelection === "ROCK") {
                content2.textContent = ("We have a tie!");
                container.appendChild(content2);
        } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
                content2.textContent = ("Player wins! PAPER beats ROCK.");
                container.appendChild(content2);
                playerScore += 1;
        } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
                content2.textContent = ("Computer wins! ROCK beats SCISSORS.");
                container.appendChild(content2);
                computerScore += 1;
        } else if (computerSelection === "PAPER" && playerSelection === "PAPER") {
                content2.textContent = ("We have a tie!");
                container.appendChild(content2);
        } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
                content2.textContent = ("Player wins! SCISSORS beat PAPER.");
                container.appendChild(content2);
                playerScore += 1;
        } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
                content2.textContent = ("Computer wins! PAPER beats ROCK.");
                container.appendChild(content2);
                computerScore += 1;
        } else if (computerSelection === "SCISSORS" && playerSelection === "SCISSORS") {
                content2.textContent = ("We have a tie!");
                container.appendChild(content2);
        } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
                content2.textContent = ("Player wins! ROCK beats SCISSORS.");
                container.appendChild(content2);
                playerScore += 1;
        } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
                content2.textContent = ("Computer wins! SCISSORS beats PAPER.");
                container.appendChild(content2);
                computerScore += 1;
        } else {
                content2.textContent = ("ERROR!");
                container.appendChild(content2);
        }
        
        return [playerScore, computerScore];
}

function gameBtn(playerSelection) {
        
        let currentScore = [];

        const computerSelection = getComputerChoice();

        content1.textContent = ("Player: " + playerSelection + " vs. Computer: " + computerSelection);
        container.appendChild(content1);

        currentScore = playRound(playerSelection, computerSelection);

        let playerScore = currentScore [0];
        let computerScore = currentScore [1];

        if (playerScore > computerScore && playerScore == 5) {
                currentPlayerScore.textContent = (playerScore);
                displayPlayerScore.appendChild(currentPlayerScore);

                currentComputerScore.textContent = (computerScore);
                displayComputerScore.appendChild(currentComputerScore);

                content2.textContent = ("GAME OVER! Player wins.");
                container.appendChild(content2);
                
                let userChoice = "";

                setTimeout (function() {
                        userChoice = prompt("Would you like to play again? Y or N").toUpperCase();
                        if (userChoice == "Y") {
                                location.reload();
                        } else {
                                alert ("Thanks for playing! See you next time.");
                                location.reload();
                        }
                }, 100);
        } else if (playerScore > computerScore) {
                currentPlayerScore.textContent = (playerScore);
                displayPlayerScore.appendChild(currentPlayerScore);

                currentComputerScore.textContent = (computerScore);
                displayComputerScore.appendChild(currentComputerScore);
        } else if (computerScore > playerScore && computerScore == 5) {
                currentPlayerScore.textContent = (playerScore);
                displayPlayerScore.appendChild(currentPlayerScore);

                currentComputerScore.textContent = (computerScore);
                displayComputerScore.appendChild(currentComputerScore);

                content2.textContent = ("GAME OVER! Computer wins.");
                container.appendChild(content2);

                let userChoice = "";

                setTimeout (function() {
                        userChoice = prompt("Would you like to play again? Y or N").toUpperCase();
                        if (userChoice == "Y") {
                                location.reload();
                        } else {
                                alert ("Thanks for playing! See you next time.");
                                location.reload();
                        }
                }, 100);
        } else if (computerScore > playerScore) {
                currentPlayerScore.textContent = (playerScore);
                displayPlayerScore.appendChild(currentPlayerScore);

                currentComputerScore.textContent = (computerScore);
                displayComputerScore.appendChild(currentComputerScore);

        } else if (computerScore == playerScore) {
                currentPlayerScore.textContent = (playerScore);
                displayPlayerScore.appendChild(currentPlayerScore);

                currentComputerScore.textContent = (computerScore);
                displayComputerScore.appendChild(currentComputerScore);
        }
}

const buttonRock = document.querySelector('#buttonRock')
buttonRock.addEventListener("click", function () {
        gameBtn("ROCK");
});

const buttonPaper = document.querySelector('#buttonPaper')
buttonPaper.addEventListener("click", function () {
        gameBtn("PAPER");
});

const buttonScissors = document.querySelector('#buttonScissors')
buttonScissors.addEventListener("click", function () {
        gameBtn("SCISSORS");
});

const container = document.querySelector('#container');

const content1 = document.createElement('div');
content1.classList.add('content');

const content2 = document.createElement('div');
content2.classList.add('content-bold');

const content3 = document.createElement('div');
content3.classList.add('content');

const displayPlayerScore = document.querySelector('#displayPlayerScore');

const currentPlayerScore = document.createElement('div');
currentPlayerScore.classList.add('currentScores');

const displayComputerScore = document.querySelector('#displayComputerScore');

const currentComputerScore = document.createElement('div');
currentComputerScore.classList.add('currentScores');