import React, { createContext, useState } from 'react';

interface PlayerContextProps {
    children: React.ReactNode;
}

interface PlayerContextType {
    playerName: string;
    setPlayerName: (name: string) => void;
}

const initialPlayerContext: PlayerContextType = {
    playerName: 'Guest',
    setPlayerName: (name: string) => {
        console.log(`Setting player name to: ${name}`);
    },
};

export const PlayerContext = createContext<PlayerContextType>(initialPlayerContext);

export const PlayerProvider: React.FC<PlayerContextProps> = ({ children }) => {
    const [playerName, setPlayerName] = useState<string>('Guest');

    return (
        <PlayerContext.Provider value={{ playerName, setPlayerName }}>
            {children}
        </PlayerContext.Provider>
    );
};
