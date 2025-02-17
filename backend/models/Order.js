const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  cart: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Cart"
  }],
  total: {
    type: Number,
    required: true,
  },
  address: {
    city: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    zipCode: { type: Number, required: true }
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
