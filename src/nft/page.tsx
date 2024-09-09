import { Link, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Header } from '../header/Header';
import Collection from './collection';
import Buy from './buy';

const NftPage = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            <div className="mx-auto p-4 h-screen w-screen bg-gray-800 text-white">
                <div className="flex flex-col h-full w-full">
                    <div className='flex justify-around pt-12 px-8 text-xl mb-4'>
                        <Link to='/nft/collection'>
                            <h1 className={location.pathname === '/nft/collection' ? 'underline' : ''}>My collection</h1>
                        </Link>
                        <Link to='/nft/buy'>
                            <h1 className={location.pathname === '/nft/buy' ? 'underline' : ''}>Buy NFT</h1>
                        </Link>
                    </div>
                    <div className='flex-grow'>
                        <Routes>
                            <Route path="/" element={<Navigate to="/nft/collection" replace />} />
                            <Route path="collection" element={<Collection />} />
                            <Route path="buy" element={<Buy />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NftPage;
