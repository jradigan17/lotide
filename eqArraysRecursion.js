const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }
  for (let item in array1) {
    if (Array.isArray(array1[item])) {
      if (!eqArrays(array1[item], array2[item])) {
        return false;
      }
      continue;
    } else if (array1[item] === array2[item]) {
      continue;
    } else if (array1[item] !== array2[item]) {
      return false;
    }
  }
  return true;
};

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false); // => false
// assertEqual(eqArrays("", ["1", "2", 3]), false); // => false

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false

module.exports = eqArrays;