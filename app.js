// CommonJS , every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayhi = require('./5-utils');
console.log(names)
console.log(sayhi);

sayhi.sayHi(names.john);
sayhi.sayHi(names.peter);

