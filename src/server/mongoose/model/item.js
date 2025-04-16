const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  description: String,
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
