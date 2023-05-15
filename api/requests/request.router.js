const router = require('express').Router();
const requestController = require('./request.controller');
const apiPathDetails = require('./request.swagger-path-details');

router.post('/requests/addRequest', requestController.addRequest, apiPathDetails.objectPayload);
router.get('/requests/getRequestsByUserId/:userId', requestController.getRequestsByUserId, apiPathDetails.getList);
router.get('/requests/getRequests/:startDate/:endDate', requestController.getRequests, apiPathDetails.getListByDates);

module.exports = router;