const { Router } = require('express');
const router = Router();
const {createUser,userProducts, createProduct, updateProduct} = require('../controllers/userController');

router.route('/:id')
    .get(userProducts);

router.route('/signup')
    .post(createUser);    

router.route('/addProduct')
    .post(createProduct);

router.route('/product/:id')
    .put(updateProduct)

module.exports = router;