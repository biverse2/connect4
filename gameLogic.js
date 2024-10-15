function createBoard () {

    const rows = 6;
    const columns = 7;
    const board = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(null);
        }
        board.push(row);
    }
    return board;
}

function updateBoard(board) {
    const boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !==null) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            chipDiv.style.top = `${i * 50}px`;
            chipDiv.style.left = `${j * 50}px`;

            if(board[i][j] === "X") {
                chipDiv.classList.add('player1');
            } else if (board[i][j] === "O") {
                chipDiv.classList.add('player2');
            }

            boardDiv.appendChild(cellDiv);
        }
       }
    }
}

let currentPlayer = 1;

function getCurrentPlayer() {
    return currentPlayer === 1 ? 'X' : 'O';
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function placePiece(columnIndex) {
    for (let i = board.length - 1; i >= 0; i--) {
        if (board[i][columnIndex] === null) {
            board[i][columnIndex] = getCurrentPlayer();  
            updateBoard(board);  
            if (checkWin()) {
                alert(`Player ${getCurrentPlayer()} wins!`);
                return;
            }
            switchPlayer();  
            break;
        }
    }
}

function updateCurrentPlayerDisplay() {
    const display = document.getElementById('currentPlayerDisplay');
    display.textContent = `Current Player: Player ${currentPlayer}`;
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updateCurrentPlayerDisplay();  
}




