const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/**
 * App Routes 
*/
router.get('/', mainController.homepage);
router.get('/features', mainController.features);
router.get('/time', mainController.time);
router.get('/about', mainController.about);



module.exports = router;