document.addEventListener('DOMContentLoaded', () => {
    let tiles = Array.from(document.getElementsByClassName("cell"));
    let player1Display = document.getElementById("playerX");
    let player2Display = document.getElementById("playerO");
    let resetButton = document.getElementById("reset");
    let announcer = document.getElementById("announcer");   
    let score = document.getElementById("score");

    let board = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;
    let currentPlayer = "X";

    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];





resetButton.addEventListener("click", resetBoard)
});