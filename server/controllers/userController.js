const user = require('../models/user');
const product = require('../models/product');
const userController = {};

//funcion para crear un nuevo usuario
userController.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = await new user({ username, email, password }).save();
    res.json(newUser);
    console.log(newUser);

};
//funcion para crear un producto por el usuario
userController.createProduct = async (req, res) => {
    const { product_owner, name, price, category, description } = req.body;
    const newProduct = await new product({ product_owner, name, price, category, description }).save();
    res.json(newProduct);
    console.log(newProduct);
}
//funcion para obtener los productos de un usuario
userController.userProducts = async (req, res) => {
    const id = req.params.id;
    const products = await product.find({ product_owner: id })
    console.log(products);
    res.send(products);
}
//funcion para actualizar un producto de un usuario
userController.updateProduct = async (req, res) => {
    const { price, description } = req.body;
    const updateProduct = await product.findOneAndUpdate(req.params.id, { price, description });
    res.send('product update');
    console.log(updateProduct);

}

module.exports = userController;