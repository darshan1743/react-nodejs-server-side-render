import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      quantity: Number,
      price: Number,
      item: {
        type: mongoose.Schema.ObjectId,
        ref: "Item",
      },
    },
  ],
  total: Number,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
