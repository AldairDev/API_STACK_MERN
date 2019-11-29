const {Router} = require('express')
const router = Router();
const {getProducts} = require('../controllers/indexController');
router.route('/')
    .get(getProducts);

router.route('/login')
    .get((req, res)=>{
        res.send('View Login');
    })


module.exports = router;