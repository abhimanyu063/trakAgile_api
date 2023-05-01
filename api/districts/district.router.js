const router = require('express').Router();
const districtController = require('./district.controller');
const apiPathDetails = require('./district.swagger-path-details');

router.post('/districts/addDistrict', districtController.addDistrict, apiPathDetails.objectPayload);
router.get('/districts/getDistricts', districtController.getDistricts, apiPathDetails.getlist);

module.exports = router;