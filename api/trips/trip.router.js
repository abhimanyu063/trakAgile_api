const { addTrip, getTripById } = require("./trip.controller");
const router = require("express").Router();
const { objectPayload, parameterPayload } = require("./trip.swagger-path-details");

router.post("/trips/addTrip", addTrip, objectPayload);
router.get("/trips/getTripById", getTripById, parameterPayload);

module.exports = router;