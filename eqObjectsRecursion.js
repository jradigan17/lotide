const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `🐢 Assertion Passed: ${actual} === ${expected} 🐢`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (!object1 || !object2 || Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let item in object1) {
    if (object1[item] instanceof Object) {
      if (!eqObjects(object1[item], object2[item])) {
        return false;
      }
      continue;
    }
    if (Array.isArray(object1[item])) {
      return eqArrays(object1[item], object2[item]);
    } else if (object1[item] !== object2[item] || !object2[item]) {
      return false;
    } else if (object1[item] === object2[item]) {
      continue;
    }
  }
  return true;
};

const eqArrays = function(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }
  for (let item in array1) {
    if (Array.isArray(array1[item])) {
      if (!eqArrays(array1[item], array2[item])) {
        return false;
      }
      continue;
    } else if (array1[item] === array2[item]) {
      continue;
    } else if (array1[item] !== array2[item]) {
      return false;
    }
  }
  return true;
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false