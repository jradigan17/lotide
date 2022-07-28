const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐢 Assertion Passed: ${actual} === ${expected} 🐢`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

const eqArrays = function(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }
  let x = 0;
  while (x < array1.length) {
    if (array1[x] === array2[x]) {
      x++;
    } else {
      return false;
    }
  }
  return true;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), true); // => true
assertEqual(eqArrays("", ["1", "2", 3]), true); // => false