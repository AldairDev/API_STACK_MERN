// const mongoose = require('mongoose');
// const Schema = mongoose.Schema();

const { Schema, model } = require('mongoose');

const product = new Schema({

    product_owner: String,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    description: String,
}, 
    { timestamps: true }
);

module.exports = model('products', product);