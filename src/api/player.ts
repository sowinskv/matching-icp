import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.post('/api/player', async (req: Request, res: Response) => {
    const { walletAddress } = req.body;

    try {
        let player = await prisma.player.findUnique({
            where: { walletAddress },
        });

        if (!player) {
            player = await prisma.player.create({
                data: {
                    walletAddress,
                    telegramHandle: 'NewUser',
                    gamePoints: 0,
                    bestScore: 0,
                    cumulativePoints: 0,
                    referralCode: 'defaultReferralCode', // To change, I added the line to fit the database
                },
            });
        }

        res.json(player);
    } catch (error) {
        console.error('Error creating or retrieving player:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
