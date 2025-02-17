const Order = require('../models/Order')


const addOrder = async (req, res) => {
  try {
    const user = req.user._id;
    const { cart, total, address } = req.body;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ success: false, message: "No cart in the order" });
    }

    if (!address || !address.city || !address.address1 || !address.zipCode) {
      return res.status(400).json({ success: false, message: "Address is incomplete" });
    }

    const newOrder = new Order({ user, cart, total, address });
    await newOrder.save();

    res.status(201).json({ success: true, message: "Order Created Successfully!", order: newOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error", description: error.message });
  }
};

module.exports = { addOrder };


