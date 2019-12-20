const { Router } = require('express');
const router = Router();
const {signin, userProducts, createProduct, updateProduct, Who} = require('../controllers/userController');
const { getProducts, getProductCat } = require('../controllers/indexController');
const passport = require('passport');
// const jwtAuthenticate = passport.authenticate('jwt', { session: false });
const {verifyToken} = require('../auth/auth');

router.route('/id/:id')
    .get(userProducts);  

router.route('/addProduct')
    .post(createProduct);

// router.route('/who', [jwtAuthenticate])
//     .get(Who);

router.route('/product/:id')
    .put(updateProduct)

router.route('/prueba/:id')
    // .get((req, res) => {res.json('hola')})
    .get(Who, (req,res) => {res.end(User)})
    // .get(Who);

router.route('/cc')
    .get(verifyToken, getProducts);

router.route('*')
    .get((req,res)=> {res.status(404).send('ulr invalid')})

module.exports = router;