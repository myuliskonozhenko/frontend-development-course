
/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    const versions = [initialCommit.slice()];

    return {
        head: () => versions[versions.length - 1],
        history: () => versions.slice(),
        push: (element) => {
            if (element !== undefined && element !== null) { // Проверка на null и undefined
                const newVersion = [...versions[versions.length - 1], element];
                versions.push(newVersion);
            }
        },
        pop: () => {
            const currentVersion = versions[versions.length - 1];
            if (currentVersion.length === 0) {
                return undefined; // Возвращаем undefined, если массив пустой
            }
            const newVersion = currentVersion.slice(0, -1);
            versions.push(newVersion);
            return currentVersion[currentVersion.length - 1]; // Возвращаем последний элемент
        }
    };
};
