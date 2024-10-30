/**
 * Валидирует операнды и возвращает их сумму
 * 
 * @param {unknown} leftOperand Левый операнд
 * @param {unknown} rightOperand Правый операнд
 * @returns {Number} Сумма операндов
 */
export const sum = (leftOperand, rightOperand) => {
    const isLeftNumber = typeof left === 'number';
    const isRightNumber = typeof right === 'number';

    if (!isLeftNumber && !isRightNumber) {
        throw new Error('Operands are not numbers');
    }
    if (!isLeftNumber) {
        throw new Error('The left operand is not number');
    }
    if (!isRightNumber) {
        throw new Error('The right operand is not number');
    }

    return left + right; // Возвращаем сумму, если оба операнда числа
};
