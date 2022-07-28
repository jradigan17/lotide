const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐢 Assertion Passed: ${actual} === ${expected} 🐢`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

let original = [];

const tail = function(input) {
  original = input;
  return input.slice(1);
};

// TEST CODE
assertEqual(tail([5,6,7]), 5);
console.log(original);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(original);
assertEqual(tail(["Hello"]), "Hello");
console.log(original);
assertEqual(tail([]), "Hello");
console.log(original);