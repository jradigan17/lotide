const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `🐢 Assertion Passed: ${actual} === ${expected} 🐢`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

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