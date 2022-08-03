const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue').findKeyByValue;
const bestTVShowsByGenre = require('../findKeyByValue').bestTVShowsByGenre;

// TEST CODE
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");


describe("#findKeyByValue", () => {

  it("returns 'drama' for 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 
  });

  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

});