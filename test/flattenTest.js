const assert = require('chai').assert;
const flatten = require('../flatten');

// TEST CODE
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// console.log(flatten(["two", 8, [13, 9, 20, "three"], "Hello", ["world", 6]])); // => [1, 2, 3, 4, 5, 6]


describe("#flatten", () => {

  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); 
  });

  it("returns ['two, 8, 13, 9, 20, 'three', 'Hello', 'world', 6] for ['two, 8, [13, 9, 20, 'three'], 'Hello', ['world', 6]]", () => {
    assert.deepEqual(flatten(["two", 8, [13, 9, 20, "three"], "Hello", ["world", 6]]), ["two", 8, 13, 9, 20, "three", "Hello", "world", 6]);
  });

  it("returns ['Hello'] for ['Hello']", () => {
    assert.deepEqual(flatten(["Hello"]), ["Hello"]);
  });

  it("returns 'Whoops Missing Input Parameters' for []", () => {
    assert.deepEqual(flatten([]), 'Whoops Missing Input Parameters');
  });

});