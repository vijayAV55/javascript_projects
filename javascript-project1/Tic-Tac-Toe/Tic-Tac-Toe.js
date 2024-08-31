const board = document.getElementById("game-board");
const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("reset-btn");

let currentPlayer = "X";
let gameBoard = Array(9).fill(null);
let isGameActive = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick(event) {
  const index = event.target.dataset.index;

  if (gameBoard[index] || !isGameActive) return;

  gameBoard[index] = currentPlayer;
  event.target.textContent = currentPlayer;

  if (checkWin()) {
    alert(`${currentPlayer} wins!`);
    isGameActive = false;
    return;
  }

  if (gameBoard.every((cell) => cell)) {
    alert("It's a draw!");
    isGameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
  return winPatterns.some((pattern) => {
    return pattern.every((index) => gameBoard[index] === currentPlayer);
  });
}

function resetGame() {
  gameBoard = Array(9).fill(null);
  cells.forEach((cell) => (cell.textContent = ""));
  currentPlayer = "X";
  isGameActive = true;
}

board.addEventListener("click", handleClick);
resetBtn.addEventListener("click", resetGame);
