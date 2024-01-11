function getComputerChoice() {
    const weapons = ["Rock", "Paper", "Scissors"];
    let weapon = weapons [Math.floor(Math.random() * weapons.length)];
    return weapon;
}

console.log(getComputerChoice());