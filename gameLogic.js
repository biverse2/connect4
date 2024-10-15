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
    boardDiv.innerHTML = " ";
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            
            if (board[i][j] === null) {
                cellDiv.classList.add('empty');  
            } else if (board[i][j] === 'X') {
                cellDiv.classList.add('player1');  
            } else if (board[i][j] === 'O') {
                cellDiv.classList.add('player2');
            }

            boardDiv.appendChild(cellDiv);
        }
    }
}


