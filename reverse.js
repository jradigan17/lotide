// Instructions: in the command line promt node reverse.js example1 example2 example3 ... etc.
// Sample: node reverse.js 1 fish 2 fish blue fish red fish

const args = process.argv;

let input = args.slice(2);

// Error check to ensure an argument was inputted
if (input.length <= 0 || args.length <= 2) {
  return console.log("Oops! Forgot the input value(s). Try Again.");
}

// Reverse each argument one at a time
for (let i of input) {
  let output = "";
  for (let j = i.length - 1; j >= 0; j--) {
    output += i[j];
  }
  console.log(output);
}

