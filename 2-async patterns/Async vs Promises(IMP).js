const { readFile, writeFile } = require("fs");
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// Another approach to avoid the above variables and directly use promises of readFile and writeFile write the following.
// const { readFile, writeFile } = require('fs').promises



const start = async () =>
{
    try {
        const first = await readFilePromise('../content/first.txt', 'utf-8');
        const second = await readFilePromise('../content/second.txt', 'utf-8');
        await writeFilePromise('../content/result-mind-grenade.txt', `This is good : ${first} ${second}`)
        console.log(first, second);
    }
    catch (err) {
        console.log(err);
    }
}

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("../content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));


// The above async await approach for asynchronous callbacks is much better because in case of Promises approach, we would have to create a nested Promise inside a Promise resolve because we do not know if the outer Promise is resolved or not.So we fall into a callback hell having a lot of nested callback functions, while in case of async await we offload the callback function and proceed the next function, so we are doing async approach.