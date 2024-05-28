import React, { useEffect, useState } from 'react';
import Box from '../Box/Box';
import style from './board.module.css';

const Board = () => {
  const startingPlayer = 'x';
  const [nextPlayer, setNextPlayer] = useState(startingPlayer);
  const [history, setHistory] = useState([]);
  const [turn, setTurn] = useState(1);
  const emptyBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const [board, setBoard] = useState(emptyBoard);
  const [winner, setWinner] = useState('');
  const boxAmount = 9;

  useEffect(() => {
    if (winner) {
      alert(`Placer "${winner.toUpperCase()}" WON`);
    }
  }, [winner]);

  return (
    <main>
      {winner ? (
        <h4 className={style.data}>Placer "{winner.toUpperCase()}" WON</h4>
      ) : (
        <h4 className={style.data}>Next player: {nextPlayer}</h4>
      )}

      <button
        onClick={() => {
          setBoard(emptyBoard);
          setNextPlayer(startingPlayer);
          setWinner(startingPlayer);
        }}
      >
        Reset board
      </button>

      <div className={style.board}>
        {[...Array(boxAmount)].map((value, index) => (
          <Box
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            board={board}
            setBoard={setBoard}
            key={index}
            position={index + 1}
            winner={winner}
            setWinner={setWinner}
            turn={turn}
            setTurn={setTurn}
            history={history}
            setHistory={setHistory}
          />
        ))}
      </div>

      <div className={turn}>
        {history.map((value) => (
          <li>
            {value.index}:{' '}
            <button
              onClick={() => {
                setBoard(value.board);
                setWinner('');
              }}
            >
              Go to move {value.index}
            </button>
          </li>
        ))}
      </div>
    </main>
  );
};

export default Board;
