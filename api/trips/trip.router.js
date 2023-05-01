const router = require('express').Router();
const tripController = require('./trip.controller');
const apiPathDetails = require('./trip.swagger-path-details');

router.post('/trips/addTrip', tripController.addTrip, apiPathDetails.objectPayload);
router.get('/trips/getTripsById/:userId', tripController.getTripsByUserId, apiPathDetails.parameterPayload);
router.post('/trips/updateTrip', tripController.updateTrip, apiPathDetails.objectUpdatePayload);

module.exports = router;