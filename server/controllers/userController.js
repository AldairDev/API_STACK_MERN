const user = require('../models/user');
const userController = {};

userController.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = await new user({ username, email, password }).save();
    res.json(newUser);
    console.log(newUser);

};

module.exports = userController;