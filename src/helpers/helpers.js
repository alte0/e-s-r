/**
 * Валидация значения в зависимости от Regex
 * @param { RegExp } regex
 * @param { String } value
 * @returns {Boolean}
 */
export const validateRegex = (regex, value) => {
    return regex.test(value);
}
/**
 * Проверяет длину строки в диапазоне min и max
 * @param {String} value
 * @param {Integer} min - мин. длина
 * @param {Integer} max - макс. длина
 * @returns {boolean}
 */
export const checkValueLength = (value, min, max) => {
    const length = value.length;
    return (length >= min) && (length <= max);
}
/**
 * Конвертирует данные формы собранные с помощью new FormData в JSON
 * @param {FormData} formData
 * @returns {string}
 */
export const converterFormDataToJson = (formData) => {
    const objectData = Object.fromEntries(formData);
    return JSON.stringify(objectData);
}
/**
 * Поиск пользователя в массиве и возврат его.
 * @param { Array } storage
 * @param { String } login
 * @returns { Object | Null} - user
 */
export const searchUser = (storage, login) => {
    const index = storage.findIndex((item) => (
        item.username.toLowerCase() === login.toLowerCase())
    );

    return storage[index] || null;
}
