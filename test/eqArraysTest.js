const assert = require('chai').assert;
const eqArrays = require('../eqArraysRecursion');

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false); // => false
// assertEqual(eqArrays("", ["1", "2", 3]), false); // => false

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false



describe("#eqArrays", () => {

  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('returns false for ["1", "2", "3"], ["1", "2", "3"]', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  });

  it(`returns true for ["1", "2", "3"], ["1", "2", "3"]`, () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("returns false for ['1', '2', '3'], ['1', '2']", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false);
  });

  it("returns true for '', ['1', '2', 3]", () => {
    assert.deepEqual(eqArrays("", ["1", "2", 3]), false);
  });

  it("returns false for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it("returns false for [[2, 3], [4]], [[2, 3], [4, 5]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it("returns false for [[2, 3], [4]], [[2, 3], 4]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

  it("returns false for []", () => {
    assert.deepEqual(eqArrays([]), false);
  });

});