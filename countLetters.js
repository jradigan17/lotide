const assertEqual = require('./assertEqual');

const letterPositions = function(string) {
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
assertEqual(letterPositions("lighthouse in the house")["h"], 4);
assertEqual(letterPositions("jennelle")["e"], 3);

module.exports = letterPositions;