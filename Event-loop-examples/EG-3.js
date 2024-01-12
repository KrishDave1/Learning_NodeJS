setInterval(() => {
    console.log(`I want to run first`);
},2000)
console.log("But I will run first");
// Might look trivial but understand this code with the perpective of how the callback queue is working and how the queue is filling after the call from web-api of setInterval.

// What John Smilga said - whenever we call a asynchronous function we will have the function "offloaded" from the stack and then run later.