const assert = require('chai').assert;
const head = require('../head');

// TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Hello"]), "Hello");
// assertEqual(head([]), "Hello");

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(head(['5']), '5'); 
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.deepEqual(head([1, 2, 3]), 1);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns 'Hello' for ['Hello']", () => {
    assert.deepEqual(head(["Hello"]), "Hello");
  });

  it("returns undefined for []", () => {
    assert.deepEqual(head([]), undefined);
  });

});