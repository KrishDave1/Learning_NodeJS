/** @format */

const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(
    '<h1>Home Page</h1><a href="http://localhost:5000/api/products">Products</a>'
  );
  // res.json(products);
  //  Error occurs when you try to set headers on the response object after the response has already been sent to the client.Meaning we have sent res.send() and then sent a json object using res.json(), so we are attempting to send two responses for the same request which is not possible(hence this error).
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:ProductId", (req, res) => {
  // Whatever we write here after ':' is called a parameter(param) which we can manipulate to get selected data.
  const id = req.params.ProductId;
  console.log(req.params); // This gives us an object of all the params available in the url.
  const singleProduct = products.find(
    (product) => Number(product.id) === Number(id)
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  res.json(singleProduct);
});

app.get("/api/products/:ProductId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("Hello world");
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
