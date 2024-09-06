import React from 'react';
import { tshirtCards } from '../../utils/tshirt';
import TshirtCard from '../component/TshirtCard';

const TshirtCollectionPage: React.FC = () => {
    return (
        <div>
        {tshirtCards.map((card, index) => (
            <TshirtCard
            key={index}
            size={card.size}
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

export default TshirtCollectionPage;
