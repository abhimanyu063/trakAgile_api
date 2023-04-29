const { addTrip, getTripsByUserId } = require("./trip.controller");
const router = require("express").Router();
const { objectPayload, parameterPayload } = require("./trip.swagger-path-details");

router.post("/trips/addTrip", addTrip, objectPayload);
router.get("/trips/getTripsById/:userId", getTripsByUserId, parameterPayload);

module.exports = router;