const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) =>
{
    // In the on method we pass the name of the string as well as the callback function.
    console.log(`data recieved ${name} ${id}`);
})
customEmitter.on("response", () => {
 // Some other logic
  console.log("Some other logic");
});

customEmitter.emit('response','john',34) // Once we subscribe to the event we emit it.

// Here order of on events matters.If you do on event after emit it will not work.  !!!.