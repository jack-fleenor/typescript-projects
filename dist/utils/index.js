/**
 * @param {number} Number of miliseconds to sleep
 * @returns {Promise} Returns a new Promise for setTimeout
 */
export const sleep = (ms = 2000) => {
    return new Promise((r) => {
        setTimeout(r, ms);
    });
};
