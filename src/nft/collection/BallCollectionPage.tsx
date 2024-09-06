import React from 'react';
import { ballCards } from '../../utils/ball';
import BallCard from '../component/BallCard';

const BallCollectionPage: React.FC = () => {
    return (
        <div>
        {ballCards.map((card, index) => (
            <BallCard
            key={index}
            color={card.color}
            multiplicateur={card.multiplicateur}
            rarity={card.rarity}
            description={card.description}
            price={card.price}
            totalMintable={card.totalMintable}
            />
        ))}
        </div>
    );
};

export default BallCollectionPage;