const express = require('express');
const router = express.Router();
<<<<<<< Updated upstream
const { isLoggedIn } = require('../middleware/checkAuth');
const dashboardController = require('../controllers/dashboardController');
=======
const dashboardController = require('../controllers/dashboardController');

>>>>>>> Stashed changes

/**
 * Dashboard Routes
 */
 router.get('/dashboard', isLoggedIn, dashboardController.dashboard);



 module.exports = router;