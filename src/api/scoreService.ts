import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Update the score from game.js
export const updateScores = async (walletAddress: string, highScore: number, totalScore: number) => {
    try {
        await prisma.score.upsert({
        where: { playerId: walletAddress },
        update: { highScore, totalScore },
        create: { playerId: walletAddress, highScore, totalScore },
        });
    } catch (error) {
        console.error('Failed to update scores:', error);
    }
};

// Can be called from Leaderboard.tsx in order to fetch the scores.
export const getScores = async (walletAddress: string) => {
    try {
        const score = await prisma.score.findUnique({ where: { playerId: walletAddress } });
        return score || { highScore: 0, totalScore: 0 };
    } catch (error) {
        console.error('Failed to retrieve scores:', error);
        return { highScore: 0, totalScore: 0 };
    }
};
