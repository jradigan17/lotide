const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArraysRecursion');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  array.forEach(item => results.push(callback(item)));
  return results;
};

assertEqual(eqArrays(map(words, word => word[0]), ["g", "c", "t", "m", "t"]), true);

/* Alternate map function

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

*/

module.exports = map;