interface GameControls {
    closeGame: () => void;
    setMuted: (muted: boolean) => void;
}

export declare const initializeGame: (isMuted: boolean) => GameControls;
export declare const setMuted: (muted: boolean) => void;
export declare const closeGame: () => void;