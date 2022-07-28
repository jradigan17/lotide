const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐢 Assertion Passed: ${actual} === ${expected} 🐢`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

const tail = function(input) {
  let output = input[0];
  return output;
};

// TEST CODE
assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail(["Hello"]), "Hello");
assertEqual(tail([]), "Hello");