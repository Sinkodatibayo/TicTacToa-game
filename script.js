"use strict";
let title = document.querySelector(".title");

let turn = "x";
let squares = [];

function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML === "") {
    element.innerHTML = "X";
    element.style.background = "black";
    turn = "o";
    title.innerHTML = "O";
  } else if (turn === "o" && element.innerHTML === "") {
    element.innerHTML = "O";
    element.style.background = "black";
    turn = "x";
    title.innerHTML = "X";
  }
  winner();
  if (
    squares[1] != "" &&
    squares[2] != "" &&
    squares[3] != "" &&
    squares[4] != "" &&
    squares[5] != "" &&
    squares[6] != "" &&
    squares[7] != "" &&
    squares[8] != "" &&
    squares[9] != "" &&
    title.innerHTML != "O wins" &&
    title.innerHTML != "X wins"
  ) {
    title.innerHTML = "Draw!";
    resetGame();
  }
}

function winner(id) {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != "" &&
    turn == "x"
  ) {
    title.innerHTML = "O wins";
  } else if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != "" &&
    turn == "o"
  ) {
    title.innerHTML = "X wins";
  }

  if (
    squares[6] == squares[4] &&
    squares[4] == squares[5] &&
    squares[6] != "" &&
    turn == "x"
  ) {
    title.innerHTML = "O wins";
  } else if (
    squares[6] == squares[4] &&
    squares[4] == squares[5] &&
    squares[6] != "" &&
    turn == "o"
  ) {
    title.innerHTML = "X wins";
  }

  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != "" &&
    turn == "x"
  ) {
    title.innerHTML = "O wins";
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != "" &&
    turn == "o"
  ) {
    title.innerHTML = "X wins";
  }

  // rows

  if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != "" &&
    turn == "x"
  ) {
    title.innerHTML = "O wins";
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != "" &&
    turn == "o"
  ) {
    title.innerHTML = "X wins";
  }

  if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != "" &&
    turn == "x"
  ) {
    title.innerHTML = "O wins";
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != "" &&
    turn == "o"
  ) {
    title.innerHTML = "X wins";
  }
  // problem
  if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[9] != "" &&
    turn == "x"
  ) {
    title.innerHTML = "O wins";
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[9] != "" &&
    turn == "o"
  ) {
    title.innerHTML = "X wins";
  }

  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != "" &&
    turn == "x"
  ) {
    title.innerHTML = "O wins";
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != "" &&
    turn == "o"
  ) {
    title.innerHTML = "X wins";
  }

  if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != "" &&
    turn == "x"
  ) {
    title.innerHTML = "O wins";
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != "" &&
    turn == "o"
  ) {
    title.innerHTML = "X wins";
  }
  resetGame();
}

function resetGame() {
  if (
    title.innerHTML === "X wins" ||
    title.innerHTML === "O wins" ||
    title.innerHTML === "Draw!"
  ) {
    setTimeout(() => {
      location.reload();
    }, 800);
  }
}
