let prompt = require("prompt-sync")();

let input = prompt("What would you like to be the start and end number (seperated with a space)? ");
let range = input.split(" ");

let sequence = prompt("What is the multiple(s) and corresponding word(s) you would like to return? (format: multiple word) ");

let input1 = sequence.split(" ");
let multiples = [input1[0], input1[2]];
let words = [input1[1], input1[3]];

let y = "";

for (let x = range[0]; x <= range[1]; x++) {
  y = x % multiples[0] === 0 ? x % multiples[1] === 0 ? words[0] + words[1] : words[0] : x % multiples[1] === 0 ? words[1] : x;
  console.log(y);
}

