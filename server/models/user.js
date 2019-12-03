const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// const pass = 'probando';
const user = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

user.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

user.methods.comparePassword = (password, passbd) => {
    return bcrypt.compareSync(password, passbd);
}

module.exports = model('users', user);