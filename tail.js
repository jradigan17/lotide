const assertEqual = require('./assertEqual');

let original = [];

const tail = function(input) {
  original = input;
  return input.slice(1);
};

// TEST CODE
assertEqual(tail([5,6,7]), [6,7]);
console.log(original);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
console.log(original);
assertEqual(tail(["Hello"]), []);
console.log(original);
assertEqual(tail([]), []);
console.log(original);

module.exports = tail;