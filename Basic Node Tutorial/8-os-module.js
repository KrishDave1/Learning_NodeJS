/** @format */

const { log } = require("node:console");
const os = require("node:os");

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
// console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  Totalmem: os.totalmem(),
  Freemem: os.freemem(),
};
// console.log(currentOS)
