import React from 'react';
import Board from './Board.js';
import sudoku from 'sudoku-umd';
import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: '',
      board: ''
    };
    this.newGame = this.newGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.sudokuCheck = this.sudokuCheck.bind(this);
  }

  newGame() {
    const numbers = sudoku.generate("easy", false);
    this.setState({
      initialBoard: numbers,
      board: numbers
    });
  }

  restartGame() {
    const restartNumber = this.state.initialBoard;
    this.setState ({
      board: restartNumber
    })
  }

  sudokuCheck() {
    const sCheck = sudoku.solve(this.state.board);
    if (sCheck === false) {
      alert('Nieprawidłowe rozwiązanie');
    } else if (this.state.board === this.state.initialBoard) {
      alert('Nieprawidłowe rozwiązanie');
    } else {
      alert('Gratulacje! Jesteś na dobrej drodze');
    }
  }

  solve() {
    const solution = sudoku.solve(this.state.initialBoard);

    if (solution !== false) {
      this.setState({board: solution});
    }
  }

  playerPick(index, value) {
    let board = this.state.board.slice(0, index) + value + this.state.board.slice(index + 1);
    
    this.setState({board});
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Sudoku</h1>
        <Board 
          board={this.state.board.split('')}
          playerPick={this.playerPick.bind(this)} />
        <div className="buttons">
          <button onClick={this.sudokuCheck}>Check</button>
          <button onClick={this.newGame}>New Game</button>
          <button onClick={this.solve.bind(this)}>Solve</button>
          <button onClick={this.restartGame}>Restart</button>
        </div>
      </div>
    );
  }
}

export default App;
