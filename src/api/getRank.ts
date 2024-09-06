interface Player {
    name: string;
    score: number;
    mach: number;
}

export const getRank = (score: number, players: Player[]): number => {
    for (let i = 0; i < players.length; i++) {
    if (score >= players[i].score) {
        return i + 1;
    }
    }
    return players.length + 1;
};