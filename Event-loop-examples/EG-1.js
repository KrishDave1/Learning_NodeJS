const { readFile } = require('fs');

console.log('started a first task')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')

// Might look trivial but understand this code with the perpective of how the callback queue is working and how the queue is filling after the call from web-api of setInterval.

// What John Smilga said - whenever we call a asynchronous function we will have the function "offloaded" from the stack and then run later.