// tic-tac-toe

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#restartButton");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartButton.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
};

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
};

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
};

function changePlayer(){
    currentPlayer = (currentPlayer == "O") ? "X" : "O";
    statusText.textContent = `${currentPlayer}'s turn` 
};

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i += 1){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} won!`
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = "Draw."
        running = false;
    }
    else{
        changePlayer();
    }
};

function restartGame(){
    currentPlayer = "O";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
};