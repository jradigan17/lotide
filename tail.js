const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `🐢 Assertion Passed: ${actual} === ${expected} 🐢`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

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