import React, { useEffect, useState } from 'react';
import { initializeGame, setMuted, closeGame } from '../game/game';
import Close from '../assets/close.png';
import On from '../assets/volume.png';
import Off from '../assets/mute.png';

interface GameComponentProps {
  onCloseGame: () => void;
}

const GameComponent: React.FC<GameComponentProps> = ({ onCloseGame }) => {
  const [isMuted, setIsMutedState] = useState(true);  // Start muted by default

  useEffect(() => {
    // Initialize the game when the component mounts
    const gameControls = initializeGame(true);  // Start muted

    // Cleanup function
    return () => {
      gameControls.closeGame();
    };
  }, []);

  const handleMuteToggle = () => {
    const newMutedState = !isMuted;
    setIsMutedState(newMutedState);
    setMuted(newMutedState);
  };

  const handleCloseGame = () => {
    closeGame();
    onCloseGame();
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center">
      <button
        onClick={handleMuteToggle}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 10,
          background: 'none',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        <img src={isMuted ? Off : On} alt="Mute/Unmute" className='mt-5 w-5 h-5' />
      </button>
      <button
        onClick={handleCloseGame}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 10,
          background: 'none',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        <img src={Close} alt="Close Game" className='mt-5 w-5 h-5' />
      </button>
      <canvas id="gameCanvas" width="400" height="600"></canvas>
    </div>
  );
};

export default GameComponent;