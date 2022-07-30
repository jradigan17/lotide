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
    console.log("\x1b[32m%s\x1b[0m", `🐢 Assertion Passed: ${actual} === ${expected} 🐢`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

const letterPositions = function(sentence) {
  const result = {};
  // logic to update result here
  
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else if (sentence[i] === " ") {
      continue;
    } else {
      result[sentence[i]] = [i];
    }
  }
  console.log(result);
  return result;
};


// TEST CODE
assertArraysEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18], true);
assertArraysEqual(letterPositions("jennelle")["e"], [1, 4, 7], true);