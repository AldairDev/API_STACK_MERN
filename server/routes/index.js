const {Router} = require('express')
const router = Router();

router.route('/')
    .get((req,res) => res.send('hello world'))
    

router.route('/login')
    .get((req, res)=>{
        res.send('View Login');
    })

module.exports = router;