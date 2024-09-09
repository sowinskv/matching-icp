// import React from 'react';
import { Header } from '../header/Header';

export default function ReferralPage() {
    return (
        <>
            <Header />
            <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
                <div className="text-center">
                    <h1 className="text-xl font-bold">Referral Points:</h1>
                    <span className='flex'><p>Number of people you invited:</p> <h3 className='ml-2'>2</h3></span> {/* {numberInvited} */}
                    <p>Personalised Link :</p>
                </div>
            </div>
        </>
    );
}
