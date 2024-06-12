/*The elements required are grabbed here, cells being in an array form, Winning combos are
 declared and score variable, game starts with a fresh array to store the users inputs, startGame
 is called and a quick consolelog to the console just to make sure everything has loaded for dev
 purposes, Event listieners for each individual cell is added on line 23 along with the
 reset and resetscores buttons */

const cells = Array.from(document.getElementsByClassName('cell'));
const messageText = document.getElementById('messageText');
const resetButton = document.getElementById('reset');
const resetScoresButton = document.getElementById('resetScore');
const playerXNameInput = document.getElementById('playerName');
const playerONameInput = document.getElementById('playerName2');
const winningCombos = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]
];
let playerText = document.getElementById('player-text1');
let playerText2 = document.getElementById('player-text2');
let scores = {
    "X": 0,
    "O": 0
}
let gameBoard = ['','','','','','','','',''];
let currentPlayer = 'X';
/*This event listener is for the AI button, this is started as false incase local co-op is
preferred by the user, i use the NOT operator to change between true and false
, consolelog for debug purposes */
let computerOpponent = false;
document.getElementById('AIopp').addEventListener('click', () => {
    computerOpponent = !computerOpponent;
    console.log(computerOpponent);
});
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
/* This function reads the indexes of all the cells , and checks for empty squares
on the board to tell wether the game is still active or not, and calls for update board
on the specified cell index by the user*/
function cellClick() {
    const cellIndex = this.getAttribute("tabindex");

    if(gameBoard[cellIndex] !== '' || !gameActive) {
        return;
    }

    updateBoard(this, cellIndex);
    checkWinner();
    

}
/*This function updates the gameboard array with the current player and updates the cell
with either X or O depending on the player*/
function updateBoard(cell, tabindex) {
    gameBoard[tabindex] = currentPlayer;
    cell.textContent = currentPlayer;
    

}
/*This function changes the player after every turn using tenary operator, we also
collect the current players turn with template literals, if computer opponent is true
then computerMove is called */
function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageText.textContent = `${currentPlayer}'s turn`;
    if(computerOpponent && currentPlayer === 'O') {
        computerMove();
    }

}
/*this function loops over all the winningCombos and stores each combination in an array of three
indices, it check what player has clicked what square to make sure its only x's or o's in a winning
combo, the winner gets announced with template literals and score is called, if there is not yet a winner
and the game knows all squares have been taken, a tie is decided, if both winner and tie are false, the 
game carrys on with changePlayer(), all end game results in gameActive to false  */
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
/*This function resets the gameboard array to empty strings, sets the current player to X, and calls for
gameActive*/
function restartGame() {
    gameBoard = ['','','','','','','','',''];
    currentPlayer = 'X';
    gameActive = true;
    messageText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => {
        cell.textContent = '';
    })

}   
/*This function resets the scores of the players to 0 and updates the textContent of the score elements*/
function resetScores() {
    scores = {
        "X": 0,
        "O": 0
    }
    document.getElementById('X-score').textContent = 0;
    document.getElementById('O-score').textContent = 0;
}
/* this function was reasearched with the help of microsoft CO pilot, this code uses the reduce method to
iterate the gameboard and create a new array called emptyCells that tells the computer what squares are currentley free
to take, randomCellIndex selects a random index from emptyCells using Math.random multiplied by the length of
emptyCells. Mathfloor rounds this number. cellElement purpose is to select the HTML index that matches the randomCellIndex and then 
update board is called to place an "O" followed by checkWinner. In summary this is a very basic computer opponent that uses random numbers to
decide its move*/
function computerMove() {
    let emptyCells = gameBoard.reduce((acc, cell, idx) => cell === '' ? acc.concat(idx) : acc, []);
    let randomCellIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    let cellElement = document.querySelector(`[tabindex="${randomCellIndex}"]`);
    updateBoard(cellElement, randomCellIndex);
    checkWinner();
}


