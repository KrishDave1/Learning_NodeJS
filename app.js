/** @format */

const { readFile, writeFile } = require("fs"); //Method 1;

readFile('./content/first.txt','utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result)
})

const first = result;
readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const second = result;
    writeFile('./content/second.txt')
})