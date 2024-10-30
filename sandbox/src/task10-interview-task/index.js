
/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    while (n >= 10) {
        let product = 1;
        while (n > 0) {
            product *= n % 10; 
            n = Math.floor(n / 10); 
        }
        n = product; 
    }
    return n; 
};
