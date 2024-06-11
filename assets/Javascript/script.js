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
console.log("game has loaded");

cells.forEach(cell => {
    cell.addEventListener('click', cellClick);
})


function startGame() {
    
    
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
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            messageText.textContent = `${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
    }
    if(!gameBoard.includes('')) {
        messageText.textContent = 'Draw!';
        gameActive = false;
        return;
    }

}

function restartGame() {
    

}   