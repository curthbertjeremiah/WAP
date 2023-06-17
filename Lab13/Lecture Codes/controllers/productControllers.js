const Products = require('../models/products');

module.exports.getProducts = (req, res, next) => {
    res.status(200).json(Products.fetchAll());
}

exports.getProductById = (req, res) => {
    res.status(200).json(Products.findById(req.params.prodId));
}

exports.save = (req, res) => {
    const prod = req.body;
    const savedProd = new Products(null, prod.title, prod.price, prod.description).save();
    res.status(200).json(savedProd);
}

exports.update = (req, res) => {
    const prod = req.body;
    const updatedProd = new Products(req.params.id, req.title, req.price, req.description).update();
    res.status(200).json(updatedProd);
}

exports.deleteById = (req,res) => {
    Products.deleteById(req.params.id);
    res.status(200).end();
}