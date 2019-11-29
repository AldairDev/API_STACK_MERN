const { Router } = require('express');
const router = Router();
const {createUser} = require('../controllers/userController');

router.route('/')
    .get((req,res)=> res.send('this is the user view'))

router.route('/signup')
    .post(createUser);    

module.exports = router;