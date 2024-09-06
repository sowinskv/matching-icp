interface BallCard {
    color: string;
    multiplicateur: number;
    rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legend';
    description: string;
    price: number;
    totalMintable: number;
}

export const ballCards: BallCard[] = [
    {
        color: 'white',
        multiplicateur: 1.5,
        rarity: 'common',
        description:"",
        price: 0.5,
        totalMintable: 100000,
    },
    {
        color: 'red',
        multiplicateur: 2,
        rarity: 'uncommon',
        description:"",
        price:2,
        totalMintable: 10000,
    },
    {       
        color: 'multi',
        multiplicateur: 3,
        rarity: 'rare',
        description:"",
        price:4,
        totalMintable: 200,
    },
];

export const getBallMultiplier = (color: string): number => {
    const ball = ballCards.find((card) => card.color === color);
    return ball ? ball.multiplicateur : 1; // Default to 1 if color not found
};