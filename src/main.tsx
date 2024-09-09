import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App'; 
import TeamPage from './team/page'; //Path for TeamPage main page
import './index.css';
import { KonstaProvider } from 'konsta/react';

import WebApp from '@twa-dev/sdk';
import LeaderboardPage from './leaderboard/page';
import NftPage from './nft/page';
import ReferralPage from './referral/page';



WebApp.ready();

const container = document.getElementById('root');
const root = createRoot(container!); // Ensure the container is not null
root.render(
  <React.StrictMode>
    <KonstaProvider theme="parent">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path='/leaderboard' element={<LeaderboardPage />} />
            <Route path='/nft/*' element={<NftPage />} />
            <Route path='/referral' element={<ReferralPage />} />
            {/* ... other routes */}
          </Routes>
        </BrowserRouter>
    </KonstaProvider>
  </React.StrictMode>
);
