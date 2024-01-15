/** @format */

const { log } = require("console");
const { readFile, writeFile } = require("fs"); //Method 1;

console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
    // utf-8 is for encoding otherwise you get random buffer data.
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;

    //This is a nested callback function. this function is called when the first readFile function is done.So first first.txt is read and then second.txt is read and then the writeFile function is called.
    readFile("./content/second.txt", "utf-8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        const second = result;
        writeFile(
            "./content/result-async.txt",
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result); // the result is undefined because writeFile does not return anything but it does create a file.
                console.log("done with writing task");
            }
        );
    });
    console.log('starting anything else');
});
console.log('starting next task');
//If we notice the output of this file, we see that the last line is printed first. This is because the readFile is an asynchronous function and it is not blocking the code. So the code is executed line by line and the callback function is executed when the readFile function is done.
