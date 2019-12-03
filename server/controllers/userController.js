const user = require('../models/user');
const product = require('../models/product');
const jwt = require('jsonwebtoken');
const userController = {};

//funcion para crear un nuevo usuario
userController.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const emailExist = await user.findOne({ email });
        if (emailExist) {
            res.status(400).send('email already exists');
        } else {
            const newUser = new user();
            newUser.username = username;
            newUser.email = email.toLowerCase();
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save();
            // newUser = await new user({ username, email, password }).save();
            res.json(newUser);
            console.log(newUser);
        }
    } catch (error) {
        console.log(error)
    }

};

//function to signin an user
userController.signin = async (req, res) => {
    const { email, password } = req.body
    const userSaved = await user.findOne({ email })
    const newUser = new user();

    try {
        if (!userSaved) {
            return res.status(400).json('email doesnt exists')
        }
        else if (!newUser.comparePassword(password, userSaved.password)) {
            return  res.status(400).json('password incorrect');
        }
        else {
            const token = crearToken(userSaved._id)
            res.json({token})
            console.log(token);
        }
    } catch (error) {

        console.log(error)
    }

}

const crearToken = (userId) =>{
    return jwt.sign({id : userId}, 'secretKey')
}

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