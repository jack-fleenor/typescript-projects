/**
 * TODO:: It needs a better return typing, it currently is
 *        unknown.
 * @param {number} ms of milliseconds to sleep, defaults to 2000
 * @returns {Promise} Returns a new Promise for setTimeout
 */
export const sleep = (ms: number = 2000): Promise<unknown> => {
  return new Promise((r) => {
    setTimeout(r, ms);
  })
}
