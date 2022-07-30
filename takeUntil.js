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


const takeUntil = function(array, callback) {
  let output = [];
  for (let item of array) {
    if (!callback(item)) {
      output.push(item);
    } else {
      break;
    }
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ], true);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ], true);