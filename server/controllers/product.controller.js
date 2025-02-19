const Product = require("../models/product.model");
module.exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200);
    res.json(products);
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

module.exports.getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ _id: id });
    res.status(200);
    res.json(product);
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

module.exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

module.exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.deleteOne({ _id: id });
    res.status(200);
    res.json(deletedProduct);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
