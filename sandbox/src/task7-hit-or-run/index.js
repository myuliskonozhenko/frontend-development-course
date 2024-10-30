
/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
    if (randomNum <= 1) return 'hit'; 
    for (let i = 2; i <= Math.sqrt(randomNum); i++) {
        if (randomNum % i === 0) return 'hit';
    }

    return 'run'; 
};
