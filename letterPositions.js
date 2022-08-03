const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArraysRecursion');

const letterPositions = function(sentence) {
  const result = {};
  // logic to update result here
  
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else if (sentence[i] === " ") {
      continue;
    } else {
      result[sentence[i]] = [i];
    }
  }
  console.log(result);
  return result;
};


// TEST CODE
assertEqual(eqArrays(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]), true);
assertEqual(eqArrays(letterPositions("jennelle")["e"], [1, 4, 7]), true);

module.exports = letterPositions;