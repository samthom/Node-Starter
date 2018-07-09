const express = require('express');
const router = express.Router();

// importing controllers
const homeController = require('../controllers/homeController');

router.get('/', homeController.index)



module.exports = router;

