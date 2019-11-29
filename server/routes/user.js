const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req,res)=> res.send('this is the user view'));
    

module.exports = router;