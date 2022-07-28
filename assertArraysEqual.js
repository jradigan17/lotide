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
    console.log(`🐢 Assertion Passed: ${actual} === ${expected} 🐢`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1], true); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], true); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2"], true); // => false
assertArraysEqual("", ["1", "2", 3], true); // => false