const cells = Array.from(document.getElementsByClassName('cell'));
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
    cells.forEach((cell, index) => {
        cell.setAttribute('index', index);
        cell.addEventListener('click', cellClick);
    });
    resetButton.addEventListener('click', restartGame);
    messageText.textContent = `${currentPlayer}'s turn`;
    gameActive = true;
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
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    changePlayer();

}

function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageText.textContent = `${currentPlayer}'s turn`;

}

function checkWinner() {

}

function restartGame() {

}   