const { Schema, model } = require('mongoose');

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

module.exports = model('users', user);