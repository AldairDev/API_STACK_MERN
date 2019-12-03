const { Router } = require('express');
const router = Router();
const {signin, userProducts, createProduct, updateProduct} = require('../controllers/userController');

router.route('/:id')
    .get(userProducts);  

router.route('/addProduct')
    .post(createProduct);

router.route('/product/:id')
    .put(updateProduct)


module.exports = router;