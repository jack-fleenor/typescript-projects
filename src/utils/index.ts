/**
 * @param {number} Number of miliseconds to sleep
 * @returns {Promise} Returns a new Promise for setTimeout
 */
export const sleep = (ms: number = 2000): Promise<any> => {
  return new Promise((r) => {
    setTimeout(r, ms);
  })
}
