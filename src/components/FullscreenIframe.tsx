// components/FullscreenIframe.tsx
import { useRef } from 'react';

interface FullscreenIframeProps {
    showGame: boolean;
    startGame: () => void;
}

const FullscreenIframe: React.FC<FullscreenIframeProps> = ({ showGame, startGame }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const isMozRequestFullScreen = (
        element: HTMLElement
    ): element is HTMLElement & { mozRequestFullScreen: () => Promise<void> } => {
    return 'mozRequestFullScreen' in element;
    };

    const isWebkitRequestFullscreen = (
        element: HTMLElement
    ): element is HTMLElement & { webkitRequestFullscreen: () => Promise<void> } => {
        return 'webkitRequestFullscreen' in element;
    };

    const isMsRequestFullscreen = (
        element: HTMLElement
    ): element is HTMLElement & { msRequestFullscreen: () => Promise<void> } => {
        return 'msRequestFullscreen' in element;
    };

    if (showGame) {
        setTimeout(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
            } else if (isMozRequestFullScreen(iframe)) {
            iframe.mozRequestFullScreen();
            } else if (isWebkitRequestFullscreen(iframe)) {
            iframe.webkitRequestFullscreen();
            } else if (isMsRequestFullscreen(iframe)) {
            iframe.msRequestFullscreen();
            }
        }
        }, 100);
    }

    return (
        <div className='z-30'>
            <button
                className="my-4 px-6 py-3 bg-pink-500 hover:bg-pink-700 rounded shadow-lg transition duration-300 ease-in-out hover:scale-105"
                onClick={startGame}
            >
            Start Game
            </button>
        </div>
    );
};

export default FullscreenIframe;
