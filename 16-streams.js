const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) =>
{
    console.log(result);
    // Looking in output we are reading data in chunks(64kB) and remaining data if less than 64kB.
})

//NOT IMPORTANT
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
