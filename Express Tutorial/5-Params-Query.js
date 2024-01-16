/** @format */

const express = require("express");
const app = express();

const { products } = require("./data");

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
  // console.log(req.params); // This gives us an object of all the params available in the url.
  const singleProduct = products.find(
    (product) => Number(product.id) === Number(id)
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  res.json(singleProduct);
});

app.get("/api/products/:ProductId/reviews/:reviewId", (req, res) => {
  let sortedProducts = [...products];
  const { ProductId, reviewId } = req.params;
  const singleProduct = sortedProducts.find(
    (product) =>
      Number(product.id) === Number(ProductId) &&
      Number(product.reviewId) === Number(reviewId)
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  let sortedProducts = [...products];
  const { search, limit } = req.query;
  console.log(req.query);
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("No products found")
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
