# Lotide

#### **Version 1.0.0**

The LHL Lotide project is inspired by the [Lodash](https://lodash.com) project library, which is a utility library for JavaScript. While Lodash itself is quite powerful, our version of it is simpler in order to focus on learning the fundamentals of programming and data management using JavaScript.

---------------------------------------------------

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

---------------------------------------------------
## Getting Started

**_Install it:_**

`npm install @jradigan/lotide`

**_Require it:_**

`const _ = require('@jradigan/lotide');`

**_Call it:_**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

---------------------------------------------------

## Documentation

**The following functions are currently implemented:**

- [x]  `assertEqual(actual, expected)`: compares two values
- [x] `countLeters(strubg)`: counts the number of times each letter appears in the string
- [x] `countOnly(allItems, itemsToCount)`: counts only the items specified in the `itemsToCount` parameter 
- [x] `eqArrays(array1, array2)`: compares two arrays to see if equivalent (includes nested arrays)
- [x] `eqObjects(object1, object2)`: compares two objects to see if equivalent (inlcudes nested objects & nested arrays)
- [x] `findKey(object, callback)`: finds the key in the object that is specified in callback
- [x] `findKeyByValue(object, value)`: finds the key of the key value pair in the object
- [x] `flatten(arrays)`: flattens nested arrays into a single array
- [x] `head(input)`: returns the first item in an array
- [x] `letterPositions(sentence)`: finds each letter's position in a string
- [x] `map(array, callback)`: executes the callback function on the array provided
- [x] `middle(list)`: finds the middle item of an array
- [x] `tail(input)`: outputs all items of an array minus the first item in the input array
- [x] `takeUntil(array, callback)`: outputs all items of an array until it comes to the callback item in which it stops
- [x] `without(input, remove)`: outputs the input array without the remove item while keeping the initial array in tact 

