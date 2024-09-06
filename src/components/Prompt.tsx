import { useEffect, useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import axios from 'axios';


interface PromptProps {
    hasPrompted: React.MutableRefObject<boolean>;
}

const Prompt: React.FC<PromptProps> = ({ hasPrompted }) => {
    const { setPlayerName } = useContext(PlayerContext);
    // const user = Telegram.WebApp.getMe();

    useEffect(() => {
        const fetchOrCreatePlayer = async (walletAddress: string) => {
            try {
                const response = await axios.post('/api/player', { walletAddress });
                if (response.data && response.data.telegramUserName) {
                    setPlayerName(response.data.telegramUserName);
                } else {
                    setPlayerName('Guest');
                }
            } catch (error) {
                console.error('Error fetching or creating player:', error);
                setPlayerName('Guest');
            }
        };

        if (!hasPrompted.current) {
            setPlayerName('Guest');
            hasPrompted.current = true;
        }
    }, [hasPrompted, setPlayerName]);

    useEffect(() => {
            setPlayerName('name / From playerContext');
    }, [setPlayerName]);

    return null;
};

export default Prompt;
