const assert = require('chai').assert;
const eqObjects = require('../eqObjectsRecursion');

// TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false


describe("#eqObjects", () => {

  it("returns true for ab, ba", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it("returns false for ab, abc", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(eqObjects(ab, abc), false); 
  });

  it("returns true for cd, dc", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it("returns false for cd cd2", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] }
    assert.deepEqual(eqObjects(cd, cd2), false);
  });

  it("returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

  it("returns false for []", () => {
    assert.deepEqual(eqObjects([]), false);
  });

});