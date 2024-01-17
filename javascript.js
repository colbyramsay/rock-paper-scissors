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
                content2.textContent = ("INVALID ENTRY!");
                container.appendChild(content2);
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
                alert ("Player: " + playerScore + " to Computer: " + computerScore);
        } else if (computerScore > playerScore) {
                alert ("Computer: " + computerScore + " to Player: " + playerScore);
        } else {
                alert ("Player: " + playerScore + " to Computer: " + computerScore);
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
        content1.textContent = ("Player: " + playerSelection + " vs. Computer: " + computerSelection);
        container.appendChild(content1);
        currentScore = playRound(playerSelection, computerSelection);
        playerScore += currentScore [0];
        computerScore += currentScore [1];
        finalScore = [playerScore, computerScore];
        //}

        if (playerScore > computerScore) {
                content3.textContent = ("Player: " + playerScore + " to Computer: " + computerScore);
                container.appendChild(content3);
        } else if (computerScore > playerScore) {
                content3.textContent = ("Computer: " + computerScore + " to Player: " + playerScore);
                container.appendChild(content3);
        } else {
                content3.textContent = ("Player: " + playerScore + " to Computer: " + computerScore);
                container.appendChild(content3);
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

const container = document.querySelector('#container');

const content1 = document.createElement('div');
content1.classList.add('content1');

const content2 = document.createElement('div');
content1.classList.add('content2');

const content3 = document.createElement('div');
content1.classList.add('content3');

//content.textContent = 'This is the glorious text-content!';

//container.appendChild(content);