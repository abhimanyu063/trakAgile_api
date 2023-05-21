const router = require('express').Router();
const forgetpasswordController = require('./forgetpassword.controller');
const apiPathDetails = require('./forgetpassword.swagger-path-details');

router.post('/forgetpassword/validateForgetPassword', forgetpasswordController.validateForgetPassword, apiPathDetails.objectPayload);
//router.get('/forgetpassword/getDistricts', districtController.getDistricts, apiPathDetails.getList);

module.exports = router;