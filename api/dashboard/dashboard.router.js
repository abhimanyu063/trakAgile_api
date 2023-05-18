const router = require('express').Router();
const dashboardController = require('./dashboard.controller');
const apiPathDetails = require('./dashboard.swagger-path-details');

router.get('/dashboard/getDashboardDetails', dashboardController.getDashboardDetails, apiPathDetails.getDetails);

module.exports = router;