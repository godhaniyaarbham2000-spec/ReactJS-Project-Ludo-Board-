import { useState } from 'react';
import './LudoBoard.css'; 

export default function LudoBoard() {
  const [moves, setMoves] = useState({ 
    blue: 0, 
    yellow: 0, 
    green: 0, 
    red: 0 
  });

  const updateMoves = (color) => {
    setMoves(prevMoves => {
      
      return { ...prevMoves, 
        
        [color]: prevMoves[color] + 1 
      };
    });
  };

  return (
    <div className="board-container">
      <h1>Objects & State</h1>
      <h2>Ludo Board</h2>

      <div className="moves-tracker">
        
        
        <div className="move-group blue-group">
          <p>Blue moves: {moves.blue}</p>
          <button 
            onClick={() => updateMoves('blue')} 
            style={{ backgroundColor: '#007bff', color: 'white' }}
          >
            +1
          </button>
        </div>

        
        <div className="move-group yellow-group">
          <p>Yellow moves: {moves.yellow}</p>
          <button 
            onClick={() => updateMoves('yellow')} 
            style={{ backgroundColor: '#ffc107', color: 'black' }}
          >
            +1
          </button>
        </div>

        
        <div className="move-group green-group">
          <p>Green moves: {moves.green}</p>
          <button 
            onClick={() => updateMoves('green')} 
            style={{ backgroundColor: '#28a745', color: 'white'  }}
          >
            +1
          </button>
        </div>

        
        <div className="move-group red-group">
          <p>Red moves: {moves.red}</p>
          <button 
            onClick={() => updateMoves('red')} 
            style={{ backgroundColor: '#dc3545', color: 'white' }}
          >
            +1
          </button>
        </div>

      </div>
    </div>
  );
}