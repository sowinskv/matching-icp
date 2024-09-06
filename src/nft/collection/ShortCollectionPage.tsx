import React from 'react';
import { shortCards } from '../../utils/short';
import ShortCard from '../component/ShortCard';

const ShortCollectionPage: React.FC = () => {
    return (
        <div>
        {shortCards.map((card, index) => (
            <ShortCard
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

export default ShortCollectionPage;
