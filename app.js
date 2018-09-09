const cells = document.querySelectorAll(".row div");

const topLeftCell = document.querySelector(".top.left");
const topMiddleCell = document.querySelector(".top.middle");
const topRightCell = document.querySelector(".top.right");
const middleLeftCell = document.querySelector(".middle.left");
const centerCell = document.querySelector(".center");
const middleRightCell = document.querySelector(".middle.right");
const bottomLeftCell = document.querySelector(".bottom.left");
const bottomMiddleCell = document.querySelector(".bottom.middle");
const bottomRightCell = document.querySelector(".bottom.right");
let winnerFound = false;

let ticOrTac = 0;
let decision = document.querySelector("h2");

cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked)

});

function cellClicked(e) {

    /* Reset game on click if winner is found or draw. */
    if (winnerFound == true) {
        location.reload();
        /* Without the else here, alert shows after game is won. */
    } else {

        /* Alert when cell is not empty. */
        if (e.target.textContent == "X" || e.target.textContent == "O") {
            alert("That cell is taken - choose another!");
        } else {
            /* Place an X or an O based on your "turn" */
            if (ticOrTac % 2 == 0) {
                decision.style.color = "blue";
                e.target.style.color = "red";
                decision.textContent = "Player 2 Turn!";
                e.target.textContent = "X";
            } else {
                decision.style.color = "red";
                e.target.style.color = "blue";
                e.target.textContent = "O";
                decision.textContent = "Player 1 Turn!";
            }
            /* Opponent's turn, changes the X -> O or vice-versa */
            ticOrTac++;
        }
    }

    if (didPlayerWin("X")) {
        WinnerFound(1);
    }

    if (didPlayerWin("O")) {
        WinnerFound(2);
    }

    /* Checks for a draw! */
    if (winnerFound != true) {
        checkDraw();
    }


    /* Checks to see if a player has won the game. */
    function didPlayerWin(player) {
        if (topLeftCell.textContent == player) {
            if (middleLeftCell.textContent == player && bottomLeftCell.textContent == player) {
                return true
            } else if (centerCell.textContent == player && bottomRightCell.textContent == player) {
                return true
            } else if (topMiddleCell.textContent == player && topRightCell.textContent == player) {
                return true
            }
        }

        if (bottomLeftCell.textContent == player &&
            bottomMiddleCell.textContent == player &&
            bottomRightCell.textContent == player) {
            return true
        }

        if (bottomRightCell.textContent == player
            && middleRightCell.textContent == player
            && topRightCell.textContent == player) {
            return true
        }

        if (bottomMiddleCell.textContent == player &&
            centerCell.textContent == player &&
            topMiddleCell.textContent == player) {
            return true
        }

        if (centerCell.textContent == player &&
            middleLeftCell.textContent == player &&
            middleRightCell.textContent == player) {
            return true
        }

        if (centerCell.textContent == player &&
            bottomLeftCell.textContent == player &&
            topRightCell.textContent == player) {
            return true
        }
    }



    /* Declares winner and initiates board reset. */
    function WinnerFound(a) {
        if (a == 1) {
            decision.style.color = "red";
            decision.textContent = "Winner: Player 1!";
        } else if (a == 2) {
            decision.style.color = "blue";
            decision.textContent = "Winner: Player 2!";
        }
        winnerFound = true;
    };

    /* Checks to see if there is draw and initiates board reset. */
    function checkDraw() {
        count = 0;
        cells.forEach(function (cell) {
            if (cell.textContent == "X" || cell.textContent == "O") {
                count++;
            }
        });

        if (count == 9) {
            decision.style.color = "orange";
            decision.textContent = "DRAW!";
            winnerFound = true;
        }
    }
};