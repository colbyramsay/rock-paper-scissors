function getComputerChoice() {
    const weapons = ["ROCK", "PAPER", "SCISSORS"];
    let weapon = weapons [Math.floor(Math.random() * weapons.length)];
    return weapon;
}

function getPlayerChoice() {
        
        var userWeapon = "";

        while (userWeapon != "ROCK" && userWeapon != "PAPER" && userWeapon != "SCISSORS") {
                var userWeapon = prompt("Please enter ROCK, PAPER, or SCISSORS").toUpperCase();
                alert ("You chose " + userWeapon);
                if (userWeapon != "ROCK" && userWeapon != "PAPER" && userWeapon != "SCISSORS") {
                alert ("INVALID ENTRY! Please enter only Rock, ROCK, PAPER, or SCISSORS");
                } else {
                        break;
                }
        }

        return userWeapon;
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
alert("Player: " + playerSelection + " vs. Computer: " + computerSelection);


if (computerSelection === "ROCK" && playerSelection === "ROCK") {
    alert("We have a tie!");
} else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        alert("Player wins! PAPER beats ROCK.");
} else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
        alert("Computer wins! ROCK beats SCISSORS.");
} else if (computerSelection === "PAPER" && playerSelection === "PAPER") {
        alert("We have a tie!");
} else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
        alert("Player wins! SCISSORS beat PAPER.");
} else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
        alert("Computer wins! PAPER beats ROCK.");
} else if (computerSelection === "SCISSORS" && playerSelection === "SCISSORS") {
        alert("We have a tie!");
} else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        alert("Player wins! ROCK beats SCISSORS.");
} else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        alert("Computer wins! SCISSORS beats PAPER.");
} else {
        alert("Invalid entry!");
}