const indexController = {};

const product = require('../models/product');

indexController.getProducts = async(req, res) => {
    const products = await product.find();
    console.log(products);
}


module.exports = indexController;

