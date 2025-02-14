const Cart = require('../models/Cart')

const addToCart = async (req,res) => {
    try {
        const userId = req.user._id
        const {product, quantity} = req.body
        let cart = await Cart.findOne({user: userId})
        if(!cart){
            cart = new Cart({
                user: userId,
                products: [{product, quantity}]
            })
        }
        else{
            const productIndex = cart.products.findIndex(p => p.product == product)
            if (productIndex > -1){
                cart.products[productIndex].quantity += quantity
            }
            else{
                cart.products.push({product, quantity})
            }
        }
    
        await cart.save()
        res.status(200).json({success: true, message: "Cart Added Successfully"})
    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error", description: error.message})
    }
}

const allCartItems = async (req, res) => {
    try {
        const user = req.user._id
        const cart = await Cart.findOne({user})
        if(!cart){
            const newCart = new Cart({user, products:[]})    
            await newCart.save()
            res.status(404).json({success: false, message: "Cart is Empty", newCart})
        }
        res.status(200).json({success: true, message: "Cart Items Found Successfully", cart})
    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error", description: error.message})
    }
}

const updateTotal = async (req,res) => {
    try {
        const user = req.user._id
        const {total} = req.body
        const cart = await Cart.findOne({user})
        cart.total = total
        await cart.save()
        res.status(200).json({success: true, message: "Total Updated Successfully", cart})
    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error", description: error.message})
    }
}

const updateQuantity = async (req, res) => {
    try {
        const user = req.user._id
        const {product,quantity} = req.body
        const cart = await Cart.findOne({user})
        const target = cart.products.find(item => item.product == product)
        target.quantity = quantity
        await cart.save()
        res.status(200).json({success: true, message: "Quantity Updated Successfully", target})
    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error", description: error.message})
    }
}

const deleteItem = async (req, res) => {
    try {
        const user = req.user._id;

        const productId = req.params.id;  
        const cart = await Cart.findOne({ user });
        if (!cart) {
            return res.status(404).json({ success: false, message: "Cart not found" });
        }
        
        cart.products = cart.products.filter((item) => item.product != productId);
        await cart.save();
        res.status(200).json({ success: true, message: "Item Deleted Successfully", cart });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error", description: error.message });
    }
};

module.exports = {addToCart, allCartItems, updateTotal,deleteItem,updateQuantity}