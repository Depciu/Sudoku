import React from 'react';
import Title from './Title.js';
import sudoku from 'sudoku-umd';

const Board = ({board, playerPick}) => {
  let mapBoard = board.map((number, index) => {
      return  (<Title key={index} number={number} playerPick={(playerValue) => playerPick(index, playerValue)} />);
  });
  return (<div>{mapBoard}</div>);
}

export default Board
