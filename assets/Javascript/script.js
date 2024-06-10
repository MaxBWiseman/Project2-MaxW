document.addEventListener('DOMContentLoaded', () => {
    let tiles = Array.from(document.getElementsByClassName("cell"));
    let player1Display = document.getElementById("playerX");
    let player2Display = document.getElementById("playerO");
    let resetButton = document.getElementById("reset");
    let announcer = document.getElementById("announcer");   
    let score = document.getElementById("score");




resetButton.addEventListener("click", resetBoard)
});