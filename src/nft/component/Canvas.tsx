import React, { useRef, useEffect } from 'react';

interface CanvasProps {
    short: string;
    tshirt: string;
    ball: string;
}

const Canvas: React.FC<CanvasProps> = ({ short, tshirt, ball }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                const handleResize = () => {
                    const width = window.innerWidth * 0.8;
                    canvas.width = width;
                    canvas.height = width * 1.7;
                    context.fillStyle = 'lightgray'; // Replace with your desired background color
                    context.fillRect(0, 0, canvas.width, canvas.height);

                    // Load and draw the base image
                    const image = new Image();
                    image.src = '/shop_preview/human_base.png'; // Replace with the actual path to your base image
                    image.onload = () => {
                        const centerX = canvas.width / 2;
                        const centerY = canvas.height / 2;
                        context.drawImage(image, centerX - image.width / 2, centerY - image.height / 2);

                        // Load and draw the other images (short, tshirt, ball)
                        if (short) {
                            const shortImage = new Image();
                            shortImage.src = short; // Assuming short is the path to your short image
                            shortImage.onload = () => {
                                context.drawImage(shortImage, centerX - shortImage.width / 2, centerY - shortImage.height / 2);
                            };
                        }

                        if (tshirt) {
                            const tshirtImage = new Image();
                            tshirtImage.src = tshirt; // Assuming tshirt is the path to your tshirt image
                            tshirtImage.onload = () => {
                                context.drawImage(tshirtImage, centerX - tshirtImage.width / 2, centerY - tshirtImage.height / 2);
                            };
                        }

                        if (ball) {
                            const ballImage = new Image();
                            ballImage.src = ball; // Assuming ball is the path to your ball image
                            ballImage.onload = () => {
                                context.drawImage(ballImage, centerX - ballImage.width / 2, centerY - ballImage.height / 2);
                            };
                        }
                    };
                };

                handleResize();
                window.addEventListener('resize', handleResize);

                return () => {
                    window.removeEventListener('resize', handleResize);
                };
            }
        }
    }, [short, tshirt, ball]);

    return (
        <div className="flex justify-center items-center">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Canvas;
