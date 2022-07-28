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

const without = function(words, remove) {
  let output = words;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (words[i] === remove[j]) {
        output.splice(i, 1);
      }
    }
  }
  return output;
};

// TEST CODE
const words = ["hello", "world", "lighthouse"];
//console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"], true);
assertArraysEqual(words, ["hello", "world", "lighthouse"], true);