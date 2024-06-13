# Tic Tac Toe Game

This is a simple Tic Tac Toe game implemented in JavaScript, HTML, and CSS. The game allows two
players to play against each other, and also provides an option to play against a computer opponent.

## Features

- Player vs Player mode
- Player vs Computer mode
- Score tracking
- Game reset functionality
- Option to toggle computer opponent on and off

## How to Play

1. Open the game in your web browser.
2. If you want to play against the computer, click the "AI Opponent" button to turn it on.
3. Click on the cells of the game board to make your move.
4. The game will automatically detect when a player has won or when the game is a draw.
5. The scores of the players are displayed above the game board.
6. To start a new game, click the "New Game" button.
7. To reset the scores, click the "Reset Scores" button.

## Javascript Code Overview

1. Winning Condition Check: The code checks if there's a winning combination on the game board. If a player has won,
it updates the message text, increments the player's score, updates the score display, and sets gameActive to false.

2. Draw Condition Check: If there are no empty cells left on the game board and no player has won, it declares the
game as a draw, updates the message text, and sets gameActive to false.

3. Player Change: If the game is still active and there's no winner or draw, it changes the current player.

4. Game Restart: The restartGame function resets the game board to an empty state, sets the current player to 'X',
and makes the game active again. It also updates the display to show that it's player X's turn.

5. Score Reset: The resetScores function resets the scores of both players to 0 and updates the score display.

6. Computer Move: The computerMove function is used when playing against the computer. It finds all the empty cells,
selects one at random, and makes a move there.

7. Player Names: The playerNames function updates the display with the names of the players.

8. AI Toggle: The code at the end toggles the AI opponent on and off when the corresponding button is clicked.
It changes the class of the button to reflect the current state.


## Future Improvements

- Improve the AI for the computer opponent to make it more challenging.
- Add animations for winning and losing.
- Add the ability to choose which player goes first.

## Code Screenshots with Comments

![Optional Alt Text](assets/images/my code for readme 1.png)

![Optional Alt Text](assets/images/Screenshot 2024-06-12 184951.png)

![Optional Alt Text](assets/images/Screenshot 2024-06-12 185104.png)

![Optional Alt Text](assets/images/Screenshot 2024-06-12 185111.png)

![Optional Alt Text](assets/images/Screenshot 2024-06-12 185118.png)

![Optional Alt Text](assets/images/Screenshot 2024-06-12 185124.png)

![Optional Alt Text](assets/images/Screenshot 2024-06-12 185131.png)

![Optional Alt Text](assets/images/Screenshot 2024-06-12 185137.png)

![Optional Alt Text](assets/images/Screenshot 2024-06-12 185321.png)

![Optional Alt Text](assets/images/Screenshot 2024-06-12 185326.png)

## Lighthouse Report

My lighthouse report is only slightly let down by color contrast

![Optional Alt Text](assets/images/lighthouse report.png)

## Validation Proof

I have checked all validators and made sure there are no left over mistakes

![Optional Alt Text](assets/images/CSS validator.png)

![Optional Alt Text](assets/images/assets/images/html validator.png)

![Optional Alt Text](assets/images/javascript validation.png)


## Unfixed Bugs

- None am aware of

## Deployment

- This site was deployed to GitHub Pages

- In the repository navigate to the setting tab

- From the source section drop down menu select the master branch

- Once the master branch has been selected, the page provided the link to the completed website

= https://maxbwiseman.github.io/Project2-MaxW/

Or click the link above!

## Credits

Credits to microsoft co pilot for help with the Computer opponent logic


Thanks for reading, Max Wiseman




