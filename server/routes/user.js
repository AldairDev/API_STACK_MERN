const { Router } = require('express');
const router = Router();
const {signin, userProducts, createProduct, updateProduct, Who} = require('../controllers/userController');
const passport = require('passport');
const jwtAuthenticate = passport.authenticate('jwt', { session: false });

router.route('/:id')
    .get(userProducts);  

router.route('/addProduct')
    .post(createProduct);

router.route('/who', [jwtAuthenticate])
    .get(Who);

router.route('/product/:id')
    .put(updateProduct)


module.exports = router;