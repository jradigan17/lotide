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

const middle = function(list) {
  let output = [];
  if (list.length % 2 === 0) {
    let index = [list.length / 2 - 1, list.length / 2];
    output.push(list[index[0]]) + output.push(list[index[1]]);
    return output;
  } else {
    let index = Math.floor(list.length / 2);
    output.push(list[index]);
    return output;
  }
};

// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2], true); // => true
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true); // => true
assertArraysEqual(middle([2, 3]), [2, 3], true); // => true