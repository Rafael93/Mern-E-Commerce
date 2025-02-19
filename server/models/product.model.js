import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is mandatory"],
  },
  category: {
    type: String,
    required: [true, "category is mandatory"],
  },
  price: {
    type: String,
    required: [true, "price is mandatory"],
  },
  description: {
    type: String,
    required: [true, "description is mandatory"],
  },
  quantity: {
    type: Number,
    min: [1, "Minimum quantity is at least 1"],
    required: [true, "quantity is mandatory"],
  },
});

const Product = new mongoose.model("Product", ProductSchema);
module.exports = Product;
