const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArraysRecursion');

const middle = function(list) {
  let output = [];
  if (list.length % 2 === 0) {
    let index = [list.length / 2 - 1, list.length / 2];
    output.push(list[index[0]]) + output.push(list[index[1]]);
    return output;
  } else {
    let index = Math.floor(list.length / 2);
    output.push(list[index]);
    return output;
  }
};

// TEST CODE
assertEqual(eqArrays(middle([1, 2, 3]), [2]), true); // => true
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // => true
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true); // => true
assertEqual(eqArrays(middle([2, 3]), [2, 3]), true); // => true

module.exports = middle;