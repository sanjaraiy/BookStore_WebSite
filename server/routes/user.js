const express = require('express')
const {signUp,userLogin} = require('../controllers/user')

const router = express.Router();

router.post('/signup',signUp);
router.post('/login',userLogin)

module.exports = router;
