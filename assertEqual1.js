const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `🐢 Assertion Passed: ${actual} === ${expected} 🐢`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("1", 1);
assertEqual(true, false);
assertEqual(012, 12.0);
assertEqual(15, 15.0);