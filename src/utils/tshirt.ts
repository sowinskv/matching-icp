// utils/tshirt.ts
interface TshirtCard {
    size: string;
    color: string;
    multiplicateur: number;
    rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legend';
    description: string;
    price: number;
    totalMintable: number;
}

export const tshirtCards: TshirtCard[] = [
    {
        size: 'L',
        color: 'pink',
        multiplicateur: 1.2,
        rarity: 'common',
        description:"",
        price: 0.5,
        totalMintable: 100000,
    },
    {
        size: 'M',
        color: 'green',
        multiplicateur: 1.5,
        rarity: 'uncommon',
        description:"",
        price:2,
        totalMintable: 10000,
    },
    {      
        size: 'S', 
        color: 'red',
        multiplicateur: 2,
        rarity: 'rare',
        description:"",
        price:4,
        totalMintable: 200,
    },
];

export const getTshirtMultiplier = (color: string): number => {
    const tshirt = tshirtCards.find(tshirt => tshirt.color === color);
    return tshirt ? tshirt.multiplicateur : 0;
};
