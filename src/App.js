import './App.css';
import Game from './components/Game.jsx';
import React, { useState } from 'react';

function App() {
  const [showGame, setShowGame] = useState(false);

  const handleClick = () => {
    setShowGame(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          How to play
        </h3>
        <button onClick={handleClick}>
          Start game
        </button>

        {showGame && <Game />}
      </header>
    </div>
  );
}

export default App;
