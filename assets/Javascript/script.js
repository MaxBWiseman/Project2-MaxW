/*The elements required are grabbed here, cells being in an array form, Winning combos are
 declared and score variable, game starts with a fresh array to store the users inputs, startGame
 is called and a quick consolelog to the console just to make sure everything has loaded for dev
 purposes, Event listieners for each individual cell is added on line 23 along with the
 reset and resetscores buttons */

const cells = Array.from(document.getElementsByClassName('cell'));
const messageText = document.getElementById('messageText');
const resetButton = document.getElementById('reset');
const resetScoresButton = document.getElementById('resetScore');
const winningCombos = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]
];
let scores = {
    "X": 0,
    "O": 0
}
let gameBoard = ['','','','','','','','',''];
let currentPlayer = 'X';
let gameActive = false;
startGame();
console.log("game has loaded");

cells.forEach(cell => {
    cell.addEventListener('click', cellClick);
})
resetButton.addEventListener('click', () => {
    restartGame();
});
resetScoresButton.addEventListener('click', () => {
    resetScores();
});

/*this functions main purpose is to declare the game active and provide the
 correct player in the MessageText element */
function startGame() {
    messageText.textContent = `${currentPlayer}'s turn`;
    gameActive = true;
}
/* */
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
    

}

function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageText.textContent = `${currentPlayer}'s turn`;

}
/*This function checks every turn for a win condition and calls for an increase to score to show the user, if neither
player win is true then a tie is decided, changes player after every runtime if game active  */
function checkWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            messageText.textContent = `${currentPlayer} wins!`;
            scores[currentPlayer]++;
            document.getElementById(`${currentPlayer}-score`).textContent = scores[currentPlayer];
            gameActive = false;
            return;
        }
    }
    if(!gameBoard.includes('')) {
        messageText.textContent = 'Draw!';
        gameActive = false;
        return;
    }
    changePlayer();

}

function restartGame() {
    gameBoard = ['','','','','','','','',''];
    currentPlayer = 'X';
    gameActive = true;
    messageText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => {
        cell.textContent = '';
    })

}   

function resetScores() {
    scores = {
        "X": 0,
        "O": 0
    }
    document.getElementById('X-score').textContent = 0;
    document.getElementById('O-score').textContent = 0;
}


