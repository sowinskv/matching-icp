// api/scoreApi.ts
export const calculateAndUpdatePlayerMachWithBonuses = (
    count: number,
    bestScore: number,
    setCount: (count: number) => void,
    setPlayerMach: (callback: (prevMach: number) => number) => void,
    setBestScore: (score: number) => void
) => {
    const newScore = count + 1;
    let bonus = 5;
    
    if (newScore % 10 === 0) {
        bonus += 10;
    }
 
    if (newScore % 1000 === 0) {
        bonus += 1000;
    }

    setCount(newScore);
    setPlayerMach(prevMach => prevMach + bonus);
    
    if (newScore > bestScore) {
        setBestScore(newScore);
    }
};
