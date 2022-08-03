const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArraysRecursion');

const takeUntil = function(array, callback) {
  let output = [];
  for (let item of array) {
    if (!callback(item)) {
      output.push(item);
    } else {
      break;
    }
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertEqual(eqArrays(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]), true);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertEqual(eqArrays(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]), true);

module.exports = takeUntil;