const indexController = {};

const product = require('../models/product');

indexController.getProducts = async (req, res) => {
    const products = await product.find();
    res.json(products);
    console.log(products);
}

indexController.getProductCat = async (req, res) => {
    const cat = req.params.category;
    const pro = await product.find({ category: cat });
    res.json(pro);
}

module.exports = indexController;

