import { Controller } from "@hotwired/stimulus";

export default class TicTacToeController extends Controller {
  static targets = ["cell", "message", "historic"];

  constructor(element) {
    super(element);

    this.cells = Array.from(this.cellTargets);
    this.messageTarget.textContent = "";

    this.resetGame();
  }

  resetGame() {
    this.turn = "X";
    this.cells.forEach((cell) => {
      cell.textContent = "";
    });

    this.setMessage();
  }

  cellClicked(event) {
    const cell = event.target;

    if (cell.textContent !== "") {
      return;
    }

    cell.innerHTML = `<h1>${this.turn}</h1>`;

    if (this.checkWinner()) {
      this.setMessageWinner();
      this.historicTarget.innerHTML += `<p>${this.turn} wins!</p>`;
      setTimeout(() => {
        this.resetGame();
      }, 3000);
      return;
    }

    this.setCurrentPlayer();
    this.setMessage();
  }

  setCurrentPlayer() {
    this.turn = this.turn === "X" ? "O" : "X";
  }

  setMessageWinner() {
    this.messageTarget.innerHTML = `<h1>${this.turn} wins!</h1>`;
  }

  setMessage() {
    this.messageTarget.innerHTML = `<h1>It's turn ${this.turn}</h1>`;
  }

  checkWinner() {
    const winningCombination = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
      [0, 4, 8], [2, 4, 6] // diagonal
    ];

    for (const combination of winningCombination) {
      const [a, b, c] = combination;
      if (
        this.cells[a].textContent === this.turn &&
        this.cells[b].textContent === this.turn &&
        this.cells[c].textContent === this.turn
      ) {
        return true;
      }
    }

    return false;
  }
}

