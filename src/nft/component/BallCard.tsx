import React from 'react';

interface BallCardProps {
  color: string;
  multiplicateur: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legend';
  description: string;
  price: number;
  totalMintable: number;
}

const BallCard: React.FC<BallCardProps> = ({ color, multiplicateur, rarity, description, price, totalMintable }) => {
  const imageSrc = `/shop_items/ball/${color.toLowerCase()}.png`;

  return (
    <div className="bg-gray-200 white rounded-lg shadow-md p-4 flex items-center m-2">
      <img src={imageSrc} alt={`Ball ${color}`} className="w-1/4 h-16 mr-4" />
      <div className="w-1/2">
        <p className="text-gray-600">Color: {color}</p>
        <p className="text-gray-600">Multiplicator: {multiplicateur}</p>
        <p className="text-gray-600">Rarity: {rarity}</p>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
      <div className="w-1/4 text-gray-600 ml-3">
        <h1 className="font-semibold text-lg">Price :</h1>
        <p>{price} ICP</p>
        <h1 className="font-semibold text-lg text-gray-600">Left:</h1>
        <p className="text-gray-600">{totalMintable}</p>
      </div>
    </div>
  );
};

export default BallCard;