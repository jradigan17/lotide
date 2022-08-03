const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  let result = {};

  for (let i of string) {
    if (result[i]) {
      result[i] += 1;
    } else if (i === " ") {
      continue;
    } else {
      result[i] = 1;
    }
  }
  console.log(result);
  return result;
};

// TEST CODE
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("jennelle")["e"], 3);

module.exports = countLetters;