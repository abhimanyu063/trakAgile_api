const router = require("express").Router();
const tripController = require("./trip.controller");
const { objectPayload, parameterPayload, objectUpdatePayload } = require("./trip.swagger-path-details");

router.post("/trips/addTrip", tripController.addTrip, objectPayload);
router.get("/trips/getTripsById/:userId", tripController.getTripsByUserId, parameterPayload);
router.post("/trips/updateTrip", tripController.updateTrip, objectUpdatePayload);

module.exports = router;