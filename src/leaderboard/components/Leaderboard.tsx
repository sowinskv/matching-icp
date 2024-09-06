import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { FaTrophy } from 'react-icons/fa';

interface Player {
    name: string;
    score: number;
    mach: number;
}

interface LeaderboardProps {
    players: Player[];
    playerRank: number;
    bestScore: number;
}

const formatMach = (mach: number) => {
    return mach >= 1000 ? `${mach / 1000}K` : mach.toString();
};

const Leaderboard: React.FC<LeaderboardProps> = ({ players, playerRank, bestScore }) => {
    const { playerName } = useContext(PlayerContext);

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Leaderboard for {playerName}</h2>
            <div className="shadow-xl p-5 bg-gray-700 rounded-lg">
                <table className="text-lg w-full">
                    <thead>
                        <tr>
                            <th className='pr-2'>Rank</th>
                            <th className='pr-2'>Score</th>
                            <th className='pr-2'>Address</th>
                            <th>$MATCH</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.slice(0, 3).map((player, index) => (
                            <tr key={index} className={`${index + 1 === playerRank ? 'bg-yellow-300 text-gray-800' : 'hover:bg-gray-600'} transition duration-150 ease-in-out`}>
                                <td>{index + 1}</td>
                                <td>{player.score}</td>
                                <td>{player.name}</td>
                                <td className='flex'>{formatMach(player.mach)} <FaTrophy className='pt-2 w-[20px] l-[20px]' /></td>
                            </tr>
                        ))}
                        <tr>
                            <td className="text-center pb-3">...</td>
                        </tr>
                        <tr className='bg-yellow-300 text-gray-800'>
                            <td>{playerRank}</td>
                            <td>{bestScore}</td>
                            <td>{playerName}</td>
                            <td className='flex'> {formatMach(0)} <FaTrophy className='pt-2 w-[20px] l-[20px]' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-lg mt-2">
                Your MATCH earned: {bestScore} (Rank: {playerRank})
            </p>
        </div>
    );
};

export default Leaderboard;
