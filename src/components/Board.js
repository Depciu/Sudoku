import React from 'react';
import Title from './Title.js';
import sudoku from 'sudoku-umd';

const Board = (stateSudoku) => {
  let arrayBoard = stateSudoku.board.split("");
  //console.log(arrayBoard);
  let mapBoard = arrayBoard.map((number, index) => {
      return  (<Title key={index} number={number} />);
  });
  return (<div>{mapBoard}</div>);
}

export default Board
