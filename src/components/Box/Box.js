import React from 'react';
import style from './box.module.css';

const Box = ({
  nextPlayer,
  setNextPlayer,
  position,
  board,
  setBoard,
  setWinner,
  winner,
  turn,
  setTurn,
  history,
  setHistory,
}) => {
  const row = Math.floor((position - 1) / 3);
  const col = (position - 1) % 3;

  const onClick = () => {
    if (winner || board[row][col] !== '') {
      return;
    }

    setNextPlayer(nextPlayer === 'x' ? 'o' : 'x');

    // Create a new copy of the board
    const updatedBoard = [...board];
    updatedBoard[row][col] = nextPlayer; // Update the value at the clicked position
    setBoard(updatedBoard); // Update the board state

    const newHistory = [
      ...history,
      {
        index: turn,
        board: updatedBoard.map((row) => [...row]), // Deep copy of the board
      },
    ];
    setHistory(newHistory);
    setTurn((prevValue) => prevValue + 1);

    // Check for a winner
    if (checkWinner(updatedBoard, row, col)) {
      setWinner(nextPlayer);
    }
  };

  // Function to check for a winner
  const checkWinner = (currentBoard, row, col) => {
    const player = currentBoard[row][col];

    // Check rows
    if (currentBoard[row].every((cell) => cell === player)) {
      return true;
    }

    // Check columns
    if (currentBoard.every((r) => r[col] === player)) {
      return true;
    }

    if (
      (row === col && currentBoard.every((r, i) => r[i] === player)) ||
      (row + col === 2 && currentBoard.every((r, i) => r[2 - i] === player))
    ) {
      return true;
    }

    return false;
  };

  return (
    <div className={style.box} onClick={onClick}>
      <span>{board[row][col]}</span>
    </div>
  );
};

export default Box;
