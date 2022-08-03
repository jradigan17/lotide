const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
  // or, using ES2015 object property shorthand:
  // console.assert(number % 2 === 0, {number, errorMsg});
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}

// FUNCTION IMPLEMENTATION
const sum = function(a, b) {
  return a + b;
};

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!

// FUNCTION IMPLEMENTATION
const sumBuggy = function(a, b) {
  return a * b;
};

// TEST CODE
console.assert(sumBuggy(1, 2) === 3); // fails, because bug!