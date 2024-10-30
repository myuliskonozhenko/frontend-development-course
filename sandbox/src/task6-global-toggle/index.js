
/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    const elements = document.querySelectorAll(`.${className}`);
    if (elements.length === 0) {
        return;
    }
    const isActive = elements[0].classList.contains(`${className}_active`);
    elements.forEach(element => {
        if (isActive) {
            element.classList.remove(`${className}_active`);
            element.classList.add(className);
        } else {
            element.classList.remove(className);
            element.classList.add(`${className}_active`);
        }
    });
};
