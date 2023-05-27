const router = require('express').Router();
const siteController = require('./site.controller');
const apiPathDetails = require('./site.swagger-path-details');

router.post('/sites/addSite', siteController.addSite, apiPathDetails.objectPayload);
router.get('/sites/getSitesByUserId/:userId', siteController.getSitesByUserId, apiPathDetails.getList);
router.get('/sites/getSites/:startDate/:endDate/:status', siteController.getSites, apiPathDetails.getListByDates);
router.get('/sites/getImage/:siteWorkId', siteController.getImage, apiPathDetails.getList);

module.exports = router;