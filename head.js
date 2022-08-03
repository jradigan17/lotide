const assertEqual = require('./assertEqual');

const head = function(input) {
  let output = input[0];
  return output;
};

// // TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Hello"]), "Hello");
// assertEqual(head([]), "Hello");

module.exports = head;