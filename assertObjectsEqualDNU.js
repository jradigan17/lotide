const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual[0] === expected) {
    console.log("\x1b[32m%s\x1b[0m", `🐢 Assertion Passed: ${inspect(actual[1])} === ${inspect(actual[2])} 🐢`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${inspect(actual[1])} !== ${inspect(actual[2])} 🛑`);
  }
};

const eqObjects = function(object1, object2) {
  if (!object1 || !object2 || Object.keys(object1).length !== Object.keys(object2).length) {
    return [false, object1, object2];
  }
  for (let item in object1) {
    if (Array.isArray(object1[item])) {
      return [eqArrays(object1[item], object2[item]), object1, object2];
    } else if (object1[item] !== object2[item] || !object2[item]) {
      return [false, object1, object2];
    } else if (object1[item] === object2[item]) {
      continue;
    }
  }
  return [true, object1, object2];
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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), true); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), true); // => false

module.exports = assertObjectsEqual;