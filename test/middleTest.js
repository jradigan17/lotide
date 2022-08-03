const assert = require('chai').assert;
const middle = require('../middle');

// TEST CODE
// assertEqual(eqArrays(middle([1, 2, 3]), [2]), true); // => true
// assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // => true
// assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true); // => true
// assertEqual(eqArrays(middle([2, 3]), [2, 3]), true); // => true


describe("#tail", () => {

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns ['5'] for ['5']", () => {
    assert.deepEqual(middle(['5']), ['5']); 
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [2, 3] for [2, 3]", () => {
    assert.deepEqual(middle([2, 3]), [2, 3]);
  });

  it("returns [3, 4] for [[1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it("returns ['Hello'] for ['Hello']", () => {
    assert.deepEqual(middle(["Hello"]), ["Hello"]);
  });

  it("returns 'Whoops Missing Input Parameters' for []", () => {
    assert.deepEqual(middle([]), 'Whoops Missing Input Parameters');
  });

});