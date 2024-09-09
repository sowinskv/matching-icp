import React, { useState, useEffect } from 'react';
import Canvas from './component/Canvas';
import { getShortMultiplier } from '../utils/short';
import { getTshirtMultiplier } from '../utils/tshirt'; 
import { getBallMultiplier } from '../utils/ball'; 

const Collection: React.FC = () => {
    const [selectedShortColor, setSelectedShortColor] = useState<string>('');
    const [selectedTshirtColor, setSelectedTshirtColor] = useState<string>('');
    const [selectedBallColor, setSelectedBallColor] = useState<string>('');

    // Load selections from localStorage when the component mounts
    useEffect(() => {
        const shortColor = localStorage.getItem('selectedShortColor');
        const tshirtColor = localStorage.getItem('selectedTshirtColor');
        const ballColor = localStorage.getItem('selectedBallColor');
        
        if (shortColor) setSelectedShortColor(shortColor);
        if (tshirtColor) setSelectedTshirtColor(tshirtColor);
        if (ballColor) setSelectedBallColor(ballColor);
    }, []);

    // Handle color selection
    const handleColorSelection = (type: 'short' | 'tshirt' | 'ball', color: string) => {
        switch (type) {
            case 'short':
                setSelectedShortColor(color);
                localStorage.setItem('selectedShortColor', color);
                break;
            case 'tshirt':
                setSelectedTshirtColor(color);
                localStorage.setItem('selectedTshirtColor', color);
                break;
            case 'ball':
                setSelectedBallColor(color);
                localStorage.setItem('selectedBallColor', color);
                break;
            default:
                break;
        }
    };

    const calculateTotalMultiplier = () => {
        let totalMultiplier = 0;

        if (selectedShortColor) {
            totalMultiplier += getShortMultiplier(selectedShortColor);
        }

        if (selectedTshirtColor) {
            totalMultiplier += getTshirtMultiplier(selectedTshirtColor);
        }

        if (selectedBallColor) {
            totalMultiplier += getBallMultiplier(selectedBallColor);
        }

        return totalMultiplier;
    };

    // Create paths to images based on selected colors
    const shortImagePath = selectedShortColor ? `/shop_preview/short/${selectedShortColor}.png` : '';
    const tshirtImagePath = selectedTshirtColor ? `/shop_preview/tshirt/${selectedTshirtColor}.png` : '';
    const ballImagePath = selectedBallColor ? `/shop_preview/ball/${selectedBallColor}.png` : '';

    return (
        <div className="bg-gray-800">
            {/* Pass the selected colors' paths to the Canvas component */}
            <Canvas short={shortImagePath} tshirt={tshirtImagePath} ball={ballImagePath} />

            {/* Color selectors */}
            <div className='flex justify-around'>
                <div>
                    <div>
                        <p>Select T-Shirt Color:</p>
                        <select className='text-gray-600' onChange={(e) => handleColorSelection('tshirt', e.target.value)} value={selectedTshirtColor}>
                            <option value="">Choose color</option>
                            <option value="pink">pink</option>
                            <option value="green">Green</option>
                            <option value="red">Red</option>
                        </select>
                    </div>

                    <div>
                        <p>Select Short Color:</p>
                        <select className='text-gray-600' onChange={(e) => handleColorSelection('short', e.target.value)} value={selectedShortColor}>
                            <option value="">Choose color</option>
                            <option value="green">Green</option>
                            <option value="orange">Orange</option>
                            <option value="pink">Pink</option>
                        </select>
                    </div>

                    <div>
                        <p>Select Ball Color:</p>
                        <select className='text-gray-600' onChange={(e) => handleColorSelection('ball', e.target.value)} value={selectedBallColor}>
                            <option value="">Choose color</option>
                            <option value="white">white</option>
                            <option value="red">Red</option>
                            <option value="multi">Multi-color</option>
                        </select>
                    </div>
                </div>
                <div className='text-white items-center justify-center'>
                    Total Multiplier: {calculateTotalMultiplier()}
                </div>
            </div>
        </div>
    );
};

export default Collection;
