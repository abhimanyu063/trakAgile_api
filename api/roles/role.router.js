const router = require('express').Router();
const roleController = require('./role.controller');
const apiPathDetails = require('./role.swagger-path-details');

router.get('/roles/getRoles', roleController.getRoles, apiPathDetails.getList);

module.exports = router;