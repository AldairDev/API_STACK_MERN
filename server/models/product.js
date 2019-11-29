const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const product = new Schema({
    
    product_owner: String,
    name: {
        type: String,
        required : true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    description: String,
}, {
    timestamps: true
}
);

module.exports = mongoose.model('products', product);