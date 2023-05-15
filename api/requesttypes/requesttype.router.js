const router = require('express').Router();
const requestTypeController = require('./requesttype.controller');
const apiPathDetails = require('./requesttype.swagger-path-details');

router.post('/requestTypes/addRequestType', requestTypeController.addRequestType, apiPathDetails.objectPayload);
router.get('/requestTypes/getRequestTypes', requestTypeController.getRequestTypes, apiPathDetails.getList);

module.exports = router;