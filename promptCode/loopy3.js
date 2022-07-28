let prompt = require("prompt-sync")();

let input = prompt("What would you like to be the start and end number (seperated with a space)? ");
let range = input.split(" ");

let sequence = prompt("What is the multiple(s) and corresponding word(s) you would like to return? (format: multiple word) ");

let input1 = sequence.split(" ");
let multiples = [];
let words = [];

for (let i = 0; i < input1.length; i += 2) {
  multiples.push(input1[i]);
  words.push(input1[i + 1]);
}

for (let x = range[0]; x <= range[1]; x++) {
  let y = "";
  for (let j = 0; j < multiples.length; j++) {
    if (x !== "0" && x % multiples[j] === 0) {
      y += words[j];
    }
  }
  if (y === "") {
    y = x;
  }
  console.log(y);
}
