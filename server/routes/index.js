const { Router } = require('express')
const router = Router();
const { getProducts, getProductCat } = require('../controllers/indexController');
const {createUser, signin} = require('../controllers/userController')
const passport = require('passport');

router.route('/')
    .get(getProducts);

router.route('/signup')
    .post(createUser);

router.route('/category/:category')
    .get(getProductCat);

router.route('/signin')
    .post(signin);


module.exports = router;