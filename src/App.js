import { useState } from 'react';
import './App.css';
import Box from './components/Box';

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill('X'));

  return (
    <div className="App">
      <div className="card">
        <div className="container">
          <h1><b>Tic - Tac - Toe</b></h1> 
          <div className="board">
            {
              boxes.map((box, i) => (
                <Box key={i} boxId={i}>{box}</Box>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
