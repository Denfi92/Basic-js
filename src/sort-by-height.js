const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let filter = arr.filter(e => e !== -1).sort((a, b) => a - b)
  let array = []
  let count = 0
  for (let e of arr) {
    if (e === -1) {
      array.push(e)
    } else {
      array.push(filter[count])
      count++
    }
  }
  return array
}

module.exports = {
  sortByHeight
};
