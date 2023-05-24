require("dotenv").config();
const express = require("express");
const router = express.Router();
const path = require('path')


const productController = require("../controllers/productController");

router.get("/", productController.getAllProduct);

router.get("/components", productController.getComponents);

router.get("/bikes", productController.getBikes);
router.post("/upload", productController.addProductItem);

router
  .route("/:id")
  .get(productController.getProductById);

module.exports = router;