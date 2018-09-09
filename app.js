let cells = document.querySelectorAll(".row div");

let topLeftCell = document.querySelector(".top.left");
let topMiddleCell = document.querySelector(".top.middle");
let topRightCell = document.querySelector(".top.right");
let middleLeftCell = document.querySelector(".middle.left");
let centerCell = document.querySelector(".center");
let middleRightCell = document.querySelector(".middle.right");
let bottomLeftCell = document.querySelector(".bottom.left");
let bottomMiddleCell = document.querySelector(".bottom.middle");
let bottomRightCell = document.querySelector(".bottom.right");
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


    /* Check to see if Player 1 won. */
    checkWinnerX();

    /* Check to see if Player 2 won. */
    checkWinnerO();

    if (winnerFound != true) {
        checkDraw();
    }

}

/* Check to see if Player 1 won. */
function checkWinnerX() {
    if (topLeftCell.textContent == "X") {
        if (middleLeftCell.textContent == "X" && bottomLeftCell.textContent == "X") {
            WinnerFound(1);
        } else if (centerCell.textContent == "X" && bottomRightCell.textContent == "X") {
            WinnerFound(1);
        } else if (topMiddleCell.textContent == "X" && topRightCell.textContent == "X") {
            WinnerFound(1);
        }
    } 
    
    if (bottomLeftCell.textContent == "X" &&
        bottomMiddleCell.textContent == "X" &&
        bottomRightCell.textContent == "X") {
        WinnerFound(1);
    } 
    
    if (bottomRightCell.textContent == "X"
        && middleRightCell.textContent == "X"
        && topRightCell.textContent == "X") {
        WinnerFound(1);
    } 
    
    if (bottomMiddleCell.textContent == "X" &&
        centerCell.textContent == "X" &&
        topMiddleCell.textContent == "X") {
        WinnerFound(1);
    }

    if (centerCell.textContent == "X" &&
    middleLeftCell.textContent == "X" &&
    middleRightCell.textContent == "X") {
        WinnerFound(1);
    }
};

/* Check to see if Player 2 won. */
function checkWinnerO() {
    if (topLeftCell.textContent == "O") {
        if (middleLeftCell.textContent == "O" && bottomLeftCell.textContent == "O") {
            WinnerFound(2);
        } else if (centerCell.textContent == "O" && bottomRightCell.textContent == "O") {
            WinnerFound(2);
        } else if (topMiddleCell.textContent == "O" && topRightCell.textContent == "O") {
            WinnerFound(2);
        }
    } 
    
    if (bottomLeftCell.textContent == "O" &&
        bottomMiddleCell.textContent == "O" &&
        bottomRightCell.textContent == "O") {
        WinnerFound(2);
    } 
    
    if (bottomRightCell.textContent == "O"
        && middleRightCell.textContent == "O"
        && topRightCell.textContent == "O") {
        WinnerFound(2);
    } 
    
    if (bottomMiddleCell.textContent == "O" &&
        centerCell.textContent == "O" &&
        topMiddleCell.textContent == "O") {
        WinnerFound(2);
    }

    if (centerCell.textContent == "O" &&
    middleLeftCell.textContent == "O" &&
    middleRightCell.textContent == "O") {
        WinnerFound(2);
    }
};

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
};