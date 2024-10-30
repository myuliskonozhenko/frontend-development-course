
/**
 * Case Converter
 * 
 * @param {String} snakeCaseString Строка в snake_case
 * @returns {String} Строка в camelCase
 */
export const solutionFn = (snakeCaseString) => {
    const words = snakeCaseString.split('_');
    if (words.length === 1) {
        return words[0];
    }
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join('');
};
