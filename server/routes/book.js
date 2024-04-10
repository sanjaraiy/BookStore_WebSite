const express  = require('express');
const { handleGetBook } = require('../controllers/book');

const router = express.Router();

router.get('/',handleGetBook);


module.exports = router;