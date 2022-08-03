const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArraysRecursion');


const without = function(input, remove) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    let removed = false;
    for (let j = 0; j < remove.length; j++) {
      if (input[i] === remove[j]) {
        removed = true;
      }
    }
    if (!removed) {
      output.push(input[i]);
    }
  }
  return output;
};

// TEST CODE
const words = ["hello", "world", "lighthouse"];

//console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqual(eqArrays(without(words, ["lighthouse", "world"]), ["hello"]), true);
assertEqual(eqArrays(words, ["hello", "world", "lighthouse"]), true);

module.exports = without;