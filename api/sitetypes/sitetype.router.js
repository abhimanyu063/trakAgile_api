const router = require('express').Router();
const siteTypeController = require('./sitetype.controller');
const apiPathDetails = require('./sitetype.swagger-path-details');

router.post('/siteTypes/addSiteType', siteTypeController.addSiteType, apiPathDetails.objectPayload);
router.get('/siteTypes/getSiteTypes', siteTypeController.getSiteTypes, apiPathDetails.getlist);

module.exports = router;