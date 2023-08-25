// stone, paper, scissors

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceButtons = document.querySelectorAll(".choiceButton");

let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();

    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "STONE";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw.";
    }
    else if(computer == "STONE"){
        return (player == "PAPER") ? "You win! :)" : "You lose. :("
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "You win! :)" : "You lose. :("
    }
    else if(computer == "SCISSORS"){
        return (player == "STONE") ? "You win! :)" : "You lose. :("
    }
}