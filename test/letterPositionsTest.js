const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// TEST CODE
// assertEqual(eqArrays(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]), true);
// assertEqual(eqArrays(letterPositions("jennelle")["e"], [1, 4, 7]), true);


describe("#letterPositions", () => {

  it("returns [3, 5, 15, 18] for ('lighthouse in the house')['h']", () => {
    assert.deepEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]);
  });

  it("returns [1, 4, 7] for ('jennelle')['e']", () => {
    assert.deepEqual(letterPositions("jennelle")["e"], [1, 4, 7]); 
  });

});