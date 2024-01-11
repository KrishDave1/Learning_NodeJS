/** @format */

// CommonJS , every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const sayhi = require("./5-utils");
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");
/**
 * TODO Here although we did not assign the require command to an object it will basically invoke the file meaning all function calls will still work although you did not call them in your main file.
 **/

// sayhi.sayHi(names.john);
// sayhi.sayHi(names.peter);
// console.log(data)
