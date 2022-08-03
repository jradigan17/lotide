const flatten = function(arrays) {
  let output = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      for (let j = 0; j < arrays[i].length; j++) {
        output.push(arrays[i][j]);
        continue;
      }
    } else {
      output.push(arrays[i]);
    }
  }
  return output;
};

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// console.log(flatten(["two", 8, [13, 9, 20, "three"], "Hello", ["world", 6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;