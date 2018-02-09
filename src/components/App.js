import React from 'react';
import Board from './Board.js';
import sudoku from 'sudoku-umd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: '672819345193..4862485..3197824137659761945283359...714.38..1426.174.6.38.463...71',
      board: '672819345193..4862485..3197824137659761945283359...714.38..1426.174.6.38.463...71'
    };
    this.newGame = this.newGame.bind(this);
  }

  newGame() {
    var numbers = sudoku.generate("easy", false);
    this.setState({
      initialBoard: numbers,
      board: numbers
    });
  }

  render() {
    return (
      <div className='app'>
        <h1>Sudoku</h1>
        <Board initialBoard={this.state.initialBoard} board={this.state.board}>
        </Board>
        <div className="buttons">
          <button>Check</button>
          <button onClick={this.newGame}>New Game</button>
          <button>Solve</button>
          <button>Restart</button>
        </div>
      </div>
    );
  }
}

export default App;
