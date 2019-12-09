const user = require('../models/user');
const product = require('../models/product');
const jwt = require('jsonwebtoken');
const userController = {};
const cloudinary = require('cloudinary');
const fs = require('fs-extra');

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key : process.env.CLOUDINARY_KEY,
    api_secret : process.env.CLOUDINARY_SECRET
})

//funcion para crear un nuevo usuario
userController.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const emailExist = await user.findOne({ email });
        if (emailExist) {
            res.status(400).send('email already exists');
        } else {
            const newUser = new user();
            newUser.username = username.toLowerCase();
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
    const {email, password } = req.body
    const emailLowerCase = email.toLowerCase();
    const userSaved = await user.findOne({ email : emailLowerCase })

    console.log(userSaved);
    const newUser = new user();

    try {
        if (!userSaved) {
            return res.status(400).json('email doesnt exists')
        }
        else if (!newUser.comparePassword(password, userSaved.password)) {
            return  res.status(400).json('password incorrect');
        }
        else {
            const {_id, username, email} = userSaved
            const user = ({_id, username, email})
            //creo el token con el id del usuario
            const token = jwt.sign( { _id }, process.env.SECRET_KEY )
            res.json({token , user})
            console.log(token, user);
        }
    } catch (error) {
        console.log(error)
    }

}

userController.Who = async (req, res) =>{
    res.json(esconder(req.user))
}

function esconder(user){
    return {
        _id: user._id || user.id,
        email : user.email,
        username : user.username
    }
}

//funcion para crear un producto por el usuario
userController.createProduct = async (req, res) => {
    const image = req.file
    const resultImg = await cloudinary.v2.uploader.upload(req.file.path);
    const { product_owner, name, price, category, description } = req.body;
    const newProduct = await new product({ 
        product_owner, 
        name, 
        price, 
        imageURL : resultImg.url, 
        imageId :resultImg.public_id ,
        category, 
        description 
    }).save();
    await fs.unlink(req.file.path);
    
    res.json(newProduct);
    console.log(image);
    console.log(resultImg);
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

const crearToken = (userId) =>{
    return jwt.sign({id : userId}, 'secretKey')
}

module.exports = userController;