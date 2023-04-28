const { addTrip, getTripById } = require("./trip.controller");
const router = require("express").Router();
router.post("/trips/addTrip", addTrip);
router.get("/trips/getTripById", getTripById);
module.exports = router;