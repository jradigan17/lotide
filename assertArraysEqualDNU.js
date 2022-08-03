const assertArraysEqual = function(array1, array2, expected) {
  let actual = "";
  if (!array1 || !array2 || !expected || array1.length !== array2.length) {
    actual = false;
  }
  let x = 0;
  while (x < array1.length) {
    if (array1[x] === array2[x]) {
      x++;
    } else {
      actual = false;
      break;
    }
    actual = true;
  }


  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `🐢 Assertion Passed: ${array1} === ${array2} 🐢`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${array1} !== ${array2} 🛑`);
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1], true); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], true); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2"], true); // => false
assertArraysEqual("", ["1", "2", 3], true); // => false

module.exports = assertArraysEqual;