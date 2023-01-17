// complete the function so it passed all tests
/**
 * a function that takes an array of integer numbers as argument
 * @param {Array.<Number>} arr
 * and
 * @returns {Array.<Number>} reordered array,

 * Reorder the array with Even numbers first followed by the odd numbers. 
 * The even and odd numbers must both be in ascending order * 
 * @example
 * sort([3,1,5,4,2,7,9,4]) // [2,4,4,1,3,5,7,9]
 *
 */

export default function sort(arr) {
  arr.sort((a, b) => {
    if (a % 2 === 0) {
      if (b % 2 === 0) {
        return a - b;
      }
      return -1;
    } else {
      if (b % 2 === 0) {
        return 1;
      }
      return a - b;
    }
  });
  return arr;
}
