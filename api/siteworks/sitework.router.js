const router = require('express').Router();
const siteWorkController = require('./sitework.controller');
const apiPathDetails = require('./sitework.swagger-path-details');

router.post('/siteWorks/addSiteWork', siteWorkController.addSiteWork, apiPathDetails.objectPayload);
router.get('/siteWorks/getSiteWorkBySiteId/:siteId', siteWorkController.getSiteWorkBySiteId, apiPathDetails.parameterPayload);

module.exports = router;