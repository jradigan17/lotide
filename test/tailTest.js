const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE
// assertEqual(tail([5,6,7]), [6,7]);
// console.log(original);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
// console.log(original);
// assertEqual(tail(["Hello"]), []);
// console.log(original);
// assertEqual(tail([]), []);
// console.log(original);

describe("#tail", () => {

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });

  it("returns [6, 7] for [5,6,7]", () => {
    assert.deepEqual(tail([5,6,7]), [6, 7]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

});