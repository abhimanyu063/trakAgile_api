const router = require('express').Router();
const workTypeController = require('./worktype.controller');
const apiPathDetails = require('./worktype.swagger-path-details');

router.post('/workTypes/addWorkType', workTypeController.addWorkType, apiPathDetails.objectPayload);
router.get('/workTypes/getWorkTypes', workTypeController.getWorkTypes, apiPathDetails.getlist);

module.exports = router;