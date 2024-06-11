const cells = document.getElementsClassName('cell');
const messageText = document.getElementById('messageText');
const resetButton = document.getElementById('reset');
const winningCombos = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]
];
let gameBoard = ['','','','','','','','',''];
let currentPlayer = 'X';
let gameActive = false;
startGame();

function startGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClick));
    resetButton.addEventListener('click', restartGame);
    messageText.textContent = `${currentPlayer}'s turn`;
}

function cellClick() {
    const cellIndex = this.getAttribute("index");

    if(gameBoard[cellIndex] !== '' || !gameActive) {
        return;
    }

    updateBoard(this, cellIndex);
    checkWinner();

}

function updateBoard(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;

}

function changePlayer() {

}

function checkWinner() {

}

function restartGame() {

}   