const router = require('express').Router();
const requestController = require('./request.controller');
const apiPathDetails = require('./request.swagger-path-details');

router.post('/requests/addRequest', requestController.addRequest, apiPathDetails.objectPayload);
router.get('/requests/getRequestsByUserId/:userId', requestController.getRequestsByUserId, apiPathDetails.getlist);

module.exports = router;