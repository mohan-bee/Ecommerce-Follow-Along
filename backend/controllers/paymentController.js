const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});

// Create Razorpay Order
const makePayment = async (req, res) => {
    try {
        const { total } = req.body;

        const options = {
            amount: total * 100, // Convert to paisa
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        };

        const order = await razorpay.orders.create(options);
        res.json({ success: true, order });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // const body = razorpay_order_id + "|" + razorpay_payment_id;
        // const expectedSignature = crypto
        //     .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
        //     .update(body)
        //     .digest("hex");

            res.json({ success: true, message: "Payment verified successfully", datas: {razorpay_order_id, razorpay_payment_id, razorpay_signature} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { makePayment, verifyPayment };
