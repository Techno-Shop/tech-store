const express = require("express");
const router = express.Router();
const product = require("../models/productModels");

// add product
router.post("/add", (req, res) => {
  const newProduct = new product({
    name: req.body.name,
    field: req.body.field,
    price: req.body.price,
    instock: req.body.instock,
    description: req.body.description,
    image: req.body.image,
  });
  newProduct
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500);
    });
});
// get all product:

router.get("/all", (req, res) => {
  product.find({}, (err, results) => {
    err ? console.log(err) : res.send(results);
  });
}),
  // get product by id:
  router.get("/:id", (req, res) => {
    product.findOne({ _id: req.params.id }, (err, results) => {
      err ? console.log(err) : res.send(results);
    });
  });

//delete product

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  product.findByIdAndRemove(id).exec();
  product.find({}, (err, results) => {
    err ? console.log(err) : res.send(results);
  });
});

// update your product
router.put("/:id", (req, res) => {
  console.log(req.params.id);
  const { name, field, price, instock, description, image } = req.body;
  product
    .findOneAndUpdate(req.params.id, {
      name,
      field,
      price,
      instock,
      description,
      image,
    })
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
