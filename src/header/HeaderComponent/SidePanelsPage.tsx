import { useState } from 'react';
import { Page, Panel, Block } from 'konsta/react';
import { Link as RouterLink } from 'react-router-dom';

export default function SidePanelsPage() {
    const [leftPanelOpened, setLeftPanelOpened] = useState(false);

    return (
        <div className='flex flex-col items-center justify-center text-white'>
            <button
                onClick={() => setLeftPanelOpened(true)}
                className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'
            >
                Menu
            </button>
            {leftPanelOpened && (
                <Panel
                    side="left"
                    opened={leftPanelOpened}
                    onBackdropClick={() => setLeftPanelOpened(false)}
                >
                    <div className='h-full'>
                        <Page className='bg-slate-800 flex flex-col h-full'>
                            <button
                                onClick={() => setLeftPanelOpened(false)}
                                className='mt-2 ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
                                style={{ width: '26%', alignSelf: 'flex-start' }}
                            >
                                Close
                            </button>
                            <Block className="mt-8 space-y-6 text-center flex-grow">
                                <ul className="py-3 text-2xl text-white hover:text-gray-600">
                                    <li className='py-1'>
                                        <RouterLink
                                            to="/"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() => setLeftPanelOpened(false)}
                                        >
                                            Play!
                                        </RouterLink>
                                    </li>
                                    <hr className="border-t border-gray-700 mx-auto my-1 w-full" />
                                    <li className='py-1'>
                                        <RouterLink
                                            to="/team"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() => setLeftPanelOpened(false)}
                                        >
                                            My Team
                                        </RouterLink>
                                    </li>
                                    <hr className="border-t border-gray-700 mx-auto my-1 w-full" />
                                    <li className='py-1'>
                                        <RouterLink
                                            to="/nft"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() => setLeftPanelOpened(false)}
                                        >
                                            My NFTs
                                        </RouterLink>
                                    </li>
                                    <hr className="border-t border-gray-700 mx-auto my-1 w-full" />
                                    <li className='py-1'>
                                        <RouterLink
                                            to="/leaderboard"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() => setLeftPanelOpened(false)}
                                        >
                                            LeaderBoard
                                        </RouterLink>
                                    </li>
                                    <hr className="border-t border-gray-700 mx-auto my-1 w-full" />
                                    <li className='py-1'>
                                        <RouterLink
                                            to="/referral"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() => setLeftPanelOpened(false)}
                                        >
                                            Referral
                                        </RouterLink>
                                    </li>
                                </ul>
                            </Block>
                            <div className='flex justify-around px-8 pb-7 bg-slate-800'>
                                <a href="https://x.com/MatchingTapp" target="_blank">
                                    <img src="/social/twitter.png" alt="Twitter" width="30" height="30" />
                                </a>
                                <a href="https://www.instagram.com/MatchingTapp" target="_blank" className="text-white text-2xl hover:text-pink-500 transition-colors">
                                    <img src="/social/instagram.png" alt="Instagram" width="30" height="30" />
                                </a>
                                <a href="https://t.me/matchingannoucement" target="_blank" className="text-white text-2xl hover:text-pink-400 transition-colors">
                                    <img src="/social/telegram.png" alt="Telegram" width="30" height="30" />
                                </a>
                            </div>
                        </Page>
                    </div>
                </Panel>
            )}
        </div>
    );
}

SidePanelsPage.title = 'Panel / Side Panels';
