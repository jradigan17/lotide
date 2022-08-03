// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const letterPositions = require('./letterPositions');
const countOnly = require('./countOnly');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArraysRecursion');
const eqObjects = require('./eqObjectsRecursion');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const countLeters = require('./countLetters');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head:             head,
  tail:             tail,
  middle:           middle,
  letterPositions:  letterPositions,
  countOnly:        countOnly,
  assertEqual:      assertEqual,
  eqArrays:         eqArrays,
  eqObjects:        eqObjects,
  findKey:          findKey,
  findKeyByValue:   findKeyByValue,
  flatten:          flatten,
  countLeters:      countLeters,
  map:              map,
  takeUntil:        takeUntil,
  without:          without
};