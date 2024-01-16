/** @format */

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // There are 2 options here -
  // 1) Either you break the cycle for this url and say that I will send the response from here, then this will break the cycle and the part written in app.get will not work.
  // res.send("testing");
  // 2) You can use next to pass the control to the next middleware function, meaning if any other such function is present then to that function or directly to app.get to do its own functionality.
  next();
};

module.exports = logger;