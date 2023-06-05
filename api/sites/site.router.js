const router = require('express').Router();
const siteController = require('./site.controller');
const apiPathDetails = require('./site.swagger-path-details');

router.post('/sites/addSite', siteController.addSite, apiPathDetails.objectPayload);
router.get('/sites/getSitesByUserId/:userId', siteController.getSitesByUserId, apiPathDetails.getList);
router.get('/sites/getSites/:startDate/:endDate/:status/:supervisorId', siteController.getSites, apiPathDetails.getListByDates);
router.get('/sites/getImage/:siteWorkId', siteController.getImage, apiPathDetails.getImage);
router.post('/sites/addLocation', siteController.addLocation, apiPathDetails.addLocationPayload);
router.get('/sites/getSiteReportedIsuueDetails/:supervisorId', siteController.getSiteReportedIsuueDetails, apiPathDetails.getReportedSite);
router.get('/sites/getLocation/:userId', siteController.getLocation, apiPathDetails.getLocation);


module.exports = router;