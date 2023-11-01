const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const checkWinner = () => {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            message.innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        }
    }
    if (!board.includes('') && gameActive) {
        message.innerText = "It's a draw!";
        gameActive = false;
    }
};

const handleCellClick = (e) => {
    const cell = e.target;
    const index = cell.id;
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
};

const restartGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    message.innerText = '';
    cells.forEach(cell => cell.innerText = '');
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
message.addEventListener('click', restartGame);
