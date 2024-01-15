/** @format */

const { readFileSync, writeFileSync, write } = require("fs"); //Method 1;

console.log('start');
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the final result : ${first}, ${second}`,
  { flag: "a" } // This flag is for indicating append mode
);

console.log('done with this task');
console.log('starting the next one');