import React, { useState } from 'react';
import Box from '../Box/Box';
import style from './board.module.css';

const Board = () => {
  const [currentPlay, setCurrentPlayer] = useState('x');

  return (
    <main className={style.board}>
      <Box />
      <Box />
      <Box />

      <Box />
      <Box />
      <Box />

      <Box />
      <Box />
      <Box />
    </main>
  );
};

export default Board;
