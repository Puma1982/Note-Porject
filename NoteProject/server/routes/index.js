const express = require('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');

/**APP ROUTES */

router.get('/', mainController.homepage);
router.get('/about', mainController.about);
router.get('/', mainController.homepage);
router.get('/', mainController.homepage);

module.exports = router;