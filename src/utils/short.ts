interface ShortCard {
    size: string;
    color: string;
    multiplicateur: number;
    rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legend';
    description: string;
    price: number;
    totalMintable: number;
}

export const shortCards: ShortCard[] = [
    {
        size: 'Small',
        color: 'red',
        multiplicateur: 1.5,
        rarity: 'common',
        description:"",
        price: 0.5,
        totalMintable: 100000,
    },
    {
        size: 'Medium',
        color: 'pink',
        multiplicateur: 2,
        rarity: 'uncommon',
        description:"",
        price:2,
        totalMintable: 10000,
    },
    {
        size: 'Large',        
        color: 'green',
        multiplicateur: 3,
        rarity: 'rare',
        description:"",
        price:4,
        totalMintable: 200,
    },
];

export const getShortMultiplier = (color: string): number => {
    const short = shortCards.find((card) => card.color === color);
    return short ? short.multiplicateur : 1; // Default to 1 if color not found (or handle as per your logic)
};