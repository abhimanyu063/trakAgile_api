const router = require('express').Router();
const userController = require('./user.controller');
const apiPathDetails = require('./user.swagger-path-details');

router.post('/users/addUser', userController.addUser, apiPathDetails.objectPayload);
router.get('/users/getUserById/:userId', userController.getUserById, apiPathDetails.parameterPayload);
router.post('/users/validateAndGetUser', userController.validateAndGetUser, apiPathDetails.objectValidatePayload);

module.exports = router;