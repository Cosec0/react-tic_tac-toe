import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import NextPlayer from './components/NextPlayer';

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(''));

  let currentPlayer = 'X';
  const [player, setPlayer] = useState('X');

  async function setPoint(e) {
    let tempArray = [...boxes];
    if(tempArray[Number(e.target.id)] === '') {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      await setPlayer(currentPlayer => (currentPlayer === 'X' ? 'O' : 'X'));
      tempArray[Number(e.target.id)] = player;
      setBoxes(tempArray);
    }
  }

  return (
    <div className="App">
      <div className="card">
        <div className="container">
          <h1><b>Tic - Tac - Toe</b></h1> 
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
