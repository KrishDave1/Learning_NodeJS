/** @format */

const { log } = require("console");
const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "/subfolder", "test.txt"); // joins the folder path together
console.log(filePath);

const base = path.basename(filePath);
console.log(base); // base file inside the path

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
// __dirname gave me absolute path of folder and then we resolved it with relative path of test.txt
