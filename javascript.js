function getComputerChoice() {
    const weapons = ["Rock", "Paper", "Scissors"];
    let weapon = weapons [Math.floor(Math.random() * weapons.length)];
    return weapon.toLowerCase();
}

let userWeapon = prompt("Please enter Rock, Paper, or Scissors").toLowerCase();

let playerSelection = userWeapon;
console.log("Player:",playerSelection);
let computerSelection = getComputerChoice();
console.log("Computer:",computerSelection);

if (computerSelection === "rock" && playerSelection === "rock") {
    console.log("We have a tie!");
} else if (computerSelection === "rock" && playerSelection === "paper") {
        console.log("Player wins! Paper beats rock.");
} else if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("Computer wins! Rock beats scissors.");
} else if (computerSelection === "paper" && playerSelection === "paper") {
    console.log("We have a tie!");
} else if (computerSelection === "paper" && playerSelection === "scissors") {
        console.log("Player wins! Scissors beat paper.");
} else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("Computer wins! Paper beats rock.");
} else if (computerSelection === "scissors" && playerSelection === "scissors") {
    console.log("We have a tie!");
} else if (computerSelection === "scissors" && playerSelection === "rock") {
        console.log("Player wins! Rock beats scissors.");
} else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("Computer wins! Scissors beats paper.");
} else {
    console.log("Invalid entry.");
}