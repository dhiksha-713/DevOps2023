const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

//@desc get all products from db
//@route get /api/products
//@access public

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;