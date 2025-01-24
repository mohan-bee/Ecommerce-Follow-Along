const Product = require('../models/Product');

const createProduct = async (req, res) => {
    try {
        const { name, description, category, tags, price, stock } = req.body;
        const images = req.files.map(file => file.filename);
        const newProduct = new Product({ name, description, category, tags, price, stock, images });

        await newProduct.save();
        if (!newProduct) {
            return res.status(400).json({ message: "Failed to Create Product" });
        }
        console.log(newProduct);
        return res.status(201).json({ message: "Product Created Successfully", data: newProduct });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error", description: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        return res.status(200).json({ message: "Product Found Successfully", data: product });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error", description: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            return res.status(404).json({ message: "Products Not Found" });
        }
        return res.status(200).json({ message: "Products Found Successfully", data: products });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error", description: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        return res.status(200).json({ message: "Product Updated Successfully", data: product });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error", description: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        return res.status(200).json({ message: "Product Deleted Successfully", data: product });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error", description: error.message });
    }
};

module.exports = { createProduct, getProductById, getAllProducts, updateProduct, deleteProduct };