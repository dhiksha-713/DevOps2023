//All fetching done here

const Product = require("../models/Product");

//asynchronous func has access to request and response
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);//front end requests the products and receives it
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
};