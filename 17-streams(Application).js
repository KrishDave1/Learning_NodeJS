var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
      // res.end(text)

      // In the above case, in case of sending or displaying large data files, we are trying to send whole thing in one go which is time consumingand not good practice.Here streams help us break data into large chunks for further usage.
      
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
