import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import NextPlayer from './components/NextPlayer';

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState('X');
  const [boardFilled, setBoardFilled] = useState(false);

  let currentPlayer = 'X';

  function resetBoard() {
    setBoxes(Array(9).fill(''));
    setPlayer('X');
    currentPlayer = 'X';
    setBoardFilled(false);
  }

  async function setPoint(e) {
    let tempArray = [...boxes];
    if(tempArray[Number(e.target.id)] === '') {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      await setPlayer(currentPlayer => (currentPlayer === 'X' ? 'O' : 'X'));
      tempArray[Number(e.target.id)] = player;
      setBoxes(tempArray);
      if(tempArray.filter(box => box === '').length === 0) {
        setBoardFilled(true);
      }
    }
  }

  return (
    <div className="App">
      <div className="card">
        <div className="container">
          <h1><b>Tic - Tac - Toe</b></h1> 
          {
            boardFilled && <button onClick={resetBoard}>Play Again</button>
          }

          <div className="board">
            {
              boxes.map((box, i) => (
                <Box key={i} boxId={i} clicker={setPoint}>{box}</Box>
              ))
            }
          </div>
        </div>
        <NextPlayer>{player}</NextPlayer>
      </div>
    </div>
  );
}

export default App;
