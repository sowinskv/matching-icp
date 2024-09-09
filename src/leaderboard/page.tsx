import React, { useState, useEffect/* , useContext */} from 'react';
import { Header } from '../header/Header';
import Leaderboard from './components/Leaderboard'; // Adjust the import path as per your project structure
// import { PlayerContext } from '../context/PlayerContext'; // Adjust the import path as per your project structure
import { getRank } from '../api/getRank';

interface LeaderboardPageProps {
    // Define any props you expect to receive
}

const LeaderboardPage: React.FC<LeaderboardPageProps> = () => {
    // const { playerName } = useContext(PlayerContext);
    const [bestScore, setBestScore] = useState(0);

    const players = [
        { name: 'Enzo04', score: 150, mach: 150000 },
        { name: 'Pawel3', score: 120, mach: 120000 },
        { name: 'Greta666', score: 100, mach: 100000 },
        { name: 'SonicUser', score: 90, mach: 90000 },
    ];

    const updateBestScore = () => {
        const newBestScore = Math.floor(Math.random() * 2) + 1;
        setBestScore(newBestScore);
    };

    useEffect(() => {
        updateBestScore();
    }, []);

    const playerRank = getRank(bestScore, players);

    return (
        <>
            <Header />
            <div className="container mx-auto p-4 h-screen bg-gray-800 flex flex-col items-center justify-center text-white">
                <Leaderboard players={players} playerRank={playerRank} bestScore={bestScore} />
            </div>
        </>
    );
};

export default LeaderboardPage;
