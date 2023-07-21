import React, { useState } from 'react';
import './TTT.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerXIsNext, setPlayerXIsNext] = useState(true);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (board[index] || checkWinner()) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = playerXIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setPlayerXIsNext(!playerXIsNext);
  };

  const renderSquare = (index) => {
    return (
      <div className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  };

  const winner = checkWinner();
  const status = winner ? `Winner: ${winner}` : `Next Player: ${playerXIsNext ? 'X' : 'O'}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {Array(9)
          .fill()
          .map((_, index) => renderSquare(index))}
      </div>
      <button className="reset-button" onClick={() => setBoard(Array(9).fill(null))}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;