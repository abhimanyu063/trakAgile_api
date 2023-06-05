const router = require('express').Router();
const userController = require('./user.controller');
const apiPathDetails = require('./user.swagger-path-details');

router.post('/users/addUser', userController.addUser, apiPathDetails.objectPayload);
router.get('/users/getUserById/:userId', userController.getUserById, apiPathDetails.pathPayload);
router.post('/users/validateAndGetUser', userController.validateAndGetUser, apiPathDetails.objectValidatePayload);
router.post('/users/validateAdminAndGetDetails', userController.validateAdminAndGetDetails, apiPathDetails.objectValidatePayload);
router.post('/users/changePassword', userController.changePassword, apiPathDetails.objectChangePassPayload);
router.get('/users/getUsers/:userId', userController.getUsers, apiPathDetails.getList);
router.get('/users/forgetPassword/:userName', userController.forgetPassword, apiPathDetails.forgetPassPathPayload);
router.post('/users/validateUserNameEmailAndMobile', userController.validateUserNameEmailAndMobile, apiPathDetails.validateUserNameEmailAndMobilePayload);
router.get('/users/getOnlineUsers/:supervisorId', userController.getOnlineUsers, apiPathDetails.getOnlineUsers);
router.get('/users/getTrackingUsers', userController.getTrackingUsers, apiPathDetails.getTrackingUsers);
router.get('/users/getSupervisor', userController.getSupervisor, apiPathDetails.getSupervisorList);
router.get('/users/getUserHierarchy', userController.getUserHierarchy, apiPathDetails.getUserHierarchy);


module.exports = router;