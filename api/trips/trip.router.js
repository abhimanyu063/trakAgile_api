const router = require("express").Router();
const tripController = require("./trip.controller");
const { objectPayload, parameterPayload } = require("./trip.swagger-path-details");

router.post("/trips/addTrip", tripController.addTrip, objectPayload);
router.get("/trips/getTripsById/:userId", tripController.getTripsByUserId, parameterPayload);

module.exports = router;